import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { SongService } from '../../../../services/song-service';
import { SongDetails } from '../song-details/song-details';
import { SongDto, SongRequestDto } from '../../../../models/songDto';
import { SongForm } from '../song-form/song-form';
import { catchError, of } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [SongDetails, SongForm],
  selector: 'song-list',
  styleUrl: './song-list.scss',
  templateUrl: './song-list.html',
  standalone: true,
})
export class SongList {
  private readonly songService = inject(SongService);
  private readonly destroyRef = inject(DestroyRef)

  songs = signal<SongDto[]>([]);
  readonly selectedSong = signal<SongDto | undefined>(undefined);

  //TEMP
  randomSong = toSignal(this.songService.multiRandomSong("Electronic", 5).pipe(
    catchError(err => {
      console.error("Failed to get random song:", err);
      return of<SongDto[]>();
    })
  ));
  
  //Pagination
  currentPage = signal(1); 
  pageSize = signal(10);
  totalPages = computed(() => Math.max(1, Math.ceil(this.songs().length / this.pageSize())));

  paginatedSongs = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    return this.songs().slice(startIndex, startIndex + this.pageSize());
  });

  constructor() {
    this.fetchSongs();
  }

  fetchSongs(): void {
    this.songService.getSongs().pipe(
      catchError(err => {
        console.error("Failed to load songs", err);
        return of<SongDto[]>([]);
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(fetchedSongs => {
      this.songs.set(fetchedSongs);
    });
  }

  onSongCreated(newSong: SongDto): void {
    this.songs.update(currentSongs => [...currentSongs, newSong]);
    this.currentPage.set(this.totalPages());
  }

  selectSongForEdit(song: SongDto): void {
    this.selectedSong.set(song);
  }

  onSongUpdated(updatedSong: SongDto): void {
    this.songs.update(current =>
      current.map(song => (song.songID === updatedSong.songID ? updatedSong : song))
    );
    this.selectedSong.set(undefined)
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
    }
  }

  setPageSize(newSize: number): void {
    this.pageSize.set(newSize);
    this.currentPage.set(1);
  }
}
