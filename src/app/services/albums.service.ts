import { inject, Injectable, signal } from '@angular/core';
import { Album } from '../shared/interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { empty, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

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

  private readonly http = inject(HttpClient);

  readonly albums = this._mockAlbums.asReadonly();

  addAlbum(body: FormGroup): Observable<Album[]> {
    const name = body.value.albumName.trim();
    const artist = body.value.artistName.trim();
    // if (!name || !artist) return of({});

    // this._mockAlbums.update(list => [
    //   ...list,
    //   { albumID: list.length + 1, albumName: name, artistName: artist}
    // ])
    return this.http.post<Album[]>(`${environment.baseURL}/album`, {
      "albumName": name,
      "artistName": artist
    });
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.baseURL}/album`);
  }
}
