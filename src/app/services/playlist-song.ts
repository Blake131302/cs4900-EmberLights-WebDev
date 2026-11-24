import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song, SongRequestDto } from '../models/song';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PlaylistSong {
  private readonly http = inject(HttpClient);
  private readonly baseURL = environment.apiURL;

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseURL}/song`);
  }

  createSong(song: SongRequestDto): Observable<Song> {
    return this.http.post<Song>(
      `${this.baseURL}/song`,
      song
    );
  }

  updateSong(id: number, song: SongRequestDto): Observable<Song> {
    return this.http.put<Song>(
      `${this.baseURL}/song/${id}`,
      { ...song, songID: id }
    );
  }
}