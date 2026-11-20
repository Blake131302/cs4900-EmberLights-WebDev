import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Song, ApiAlbum } from '../models/song';

@Injectable({ providedIn: 'root' })
export class PlaylistSong {
  private http = inject(HttpClient);

  private readonly _songs = signal<Song[]>([]);
  readonly songs = this._songs.asReadonly();

  private nextId = -1;

  getSongs(): Observable<Song[]> {
    return this.http
      .get<ApiAlbum[]>('https://jsonplaceholder.typicode.com/albums?_limit=10')
      .pipe(
        map(albums => albums.map(album => ({
          id: album.id,
          name: album.title
        })))
      );
  }

  addSong(name: string): void {
    if (name.trim() === '') {
      return;
    }

    this._songs.update(songs => [
      ...songs,
      { id: this.nextId--, name: name.trim() }
    ]);
  }
}