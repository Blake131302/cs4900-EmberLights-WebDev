import { Component, inject, signal } from '@angular/core';
import { SongService } from '../../../../services/song-service';
import { Song } from '../../../../models/song';
import { SongDetails } from '../song-details/song-details';

@Component({
  imports: [SongDetails],
  selector: 'song-list',
  styleUrl: './song-list.scss',
  templateUrl: './song-list.html',
  standalone: true,
})
export class SongList {
  songService = inject(SongService);

  newSong = signal<Song>({
    id: 0,
    name: '',
    genre: '',
    duration: '',
    album: '',
    artist: ''
  })

  addSong(): void {
    //Return if song has no name
    if (!this.newSong().name.trim()) return; 
    
    // Remember to pas as a copy, not the signal itself.
    this.songService.addSong({
      ...this.newSong(), 
      id: this.songService.songs().length + 1});
    
      this.newSong.set({
        id: 0,
        name: '',
        genre: '',
        duration: '',
        album: '',
        artist: ''
      });
  }
  
  get songs() {
    return this.songService.songs();
  }

  // Bind update events in the form to methods
  updateName(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, name: value }));
  }

  updateGenre(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, genre: value }));
  }

  updateDuration(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, duration: value }));
  }

  updateAlbum(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, album: value }));
  }

  updateArtist(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newSong.update(song => ({ ...song, artist: value }));
  }
}
