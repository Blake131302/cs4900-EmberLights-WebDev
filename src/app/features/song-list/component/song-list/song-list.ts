import { Component, inject, signal } from '@angular/core';
import { SongService } from '../../../../services/song-service';
import { FormsModule } from '@angular/forms';
import { Song } from '../../../../models/song';
import { SongDetails } from '../song-details/song-details';
import { SongDto, SongRequestDto } from '../../../../models/songDto';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [FormsModule, SongDetails],
  selector: 'song-list',
  styleUrl: './song-list.scss',
  templateUrl: './song-list.html',
  standalone: true,
})
export class SongList {
  private songService = inject(SongService);
  songs = signal<SongDto[]>([]);
  
  ngOnInit() {
    this.songService.getSongs().subscribe(songs => {
      this.songs.set(songs);
    });
  }

  newSong = signal<SongRequestDto>({
    songID: 0,
    songName: '',
    genreID: 0,
    songDuration: '',
    albumID: 0
  })

  addSong(): void {
    const payload: SongRequestDto = {
      ...this.newSong(),
      songID: undefined
    };

    //Apparently observables only trigger if you subscribe
    this.songService.createSong(payload).subscribe({
      next: (createdSong: SongDto) => {
        this.songs.update(currentSongs => [...currentSongs, createdSong]);

        this.newSong.set({
          songID: 0,
          songName: '',
          genreID: 0,
          songDuration: '',
          albumID: 0
        });
      },
      error: (err) => {
        console.error('Failed to create song:', err);
      }
    });
  }

  getSongs() {
    return this.songs();
  }

  // Bind update events in the form to methods
  updateName(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, songName: value }));
  }

  updateGenreID(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, genreID: Number(value) }));
  }

  updateDuration(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, songDuration: value }));
  }

  updateAlbumID(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, albumID: Number(value) }));
  }

  updateArtist(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, artist: value }));
  }
}
