import { Component, DestroyRef, inject, signal } from '@angular/core';
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

  //Use a writable signal so I don't have to refetch everything every update
  songs = signal<SongDto[]>([]);

  readonly selectedSong = signal<SongDto | undefined>(undefined);

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
}
