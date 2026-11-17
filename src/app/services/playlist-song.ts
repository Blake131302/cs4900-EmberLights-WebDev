import { Injectable, signal } from '@angular/core';
import { Song } from '../models/song';

@Injectable()
export class PlaylistSong {
  songs = signal<Song[]>([
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Song 3' }
  ]);

  private nextId = 4;

  addSong(name: string): void {
    if (name.trim() === '') {
      return;
    }

    this.songs.update(songs => [
      ...songs,
      { id: this.nextId++, name: name.trim() }
    ]);
  }
}