import { inject, Injectable, signal } from '@angular/core';
import { Album } from '../shared/interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumsService {

  private readonly _mockAlbums = signal<Album[]>([
    { albumID: 1, albumName: 'Ride The Lightning', artistName: 'Metallica' },
    { albumID: 2, albumName: 'Toxicity', artistName: 'System of a Down' },
    { albumID: 3, albumName: 'Superheaven', artistName: 'Superheaven' },
    { albumID: 4, albumName: 'Master of Puppets', artistName: 'Metallica' },
    { albumID: 5, albumName: 'Paranoid', artistName: 'Black Sabbath' },
    { albumID: 6, albumName: 'Painkiller', artistName: 'Judas Priest' },
    { albumID: 7, albumName: 'The Number of the Beast', artistName: 'Iron Maiden' },
    { albumID: 8, albumName: 'Rust in Peace', artistName: 'Megadeth' },
  ]);

  readonly albums = this._mockAlbums.asReadonly();
  private readonly apiService = inject(ApiService);

  addAlbum(albumName: string, artistName: string): void {
    const name = albumName.trim();
    const artist = artistName.trim();
    if (!name || !artist) return;

    this._mockAlbums.update(list => [
      ...list,
      { albumID: list.length + 1, albumName: name, artistName: artist}
    ])
    return;
  }

  getAlbums(): Observable<Album> {
    console.log(this.apiService.get<Album[]>('album'));
    return this.apiService.get('album');
  }
}
