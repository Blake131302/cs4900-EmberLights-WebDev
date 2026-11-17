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
  songService = inject(SongService);

  // Type is Signal<SongDto[]> (always an array, never undefined)
  songs = toSignal(this.songService.getSongs(), { 
    initialValue: []});


  newSong = signal<SongRequestDto>({
    songID: 0,
    songName: '',
    genreID: 0,
    songDuration: '',
    albumID: 0
  })

  addSong(): void {
    // Remember to pas as a copy, not the signal itself.
    this.songService.createSong({
      ...this.newSong(),
      songID: undefined
    });

    this.newSong.set({
      songID: 0,
      songName: '',
      genreID: 0,
      songDuration: '',
      albumID: 0
    });

  }
  
  getSongs() {
    return toSignal(this.songService.getSongs());
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
