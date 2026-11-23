import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SongDto, SongRequestDto } from '../models/songDto';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SongService {
    private readonly http = inject(HttpClient);
    private readonly baseURL = environment.apiURL;

    private _songs = signal<SongDto[]>([])
    readonly songs = this._songs.asReadonly();

    getSongs(): Observable<SongDto[]> {
        return this.http.get<SongDto[]>(`${this.baseURL}/song`).pipe(tap((songs) => this._songs.set(songs)));
    }

    getSongById(songID: number): Observable<SongDto> {
        return this.http.get<SongDto>(`${this.baseURL}/song/${songID}`);
    }

    createSong(song: SongRequestDto): Observable<SongDto> {
        return this.http.post<SongDto>(`${this.baseURL}/song`, song).pipe(tap((createdSong) => {
            this._songs.update((current) => [...current, createdSong])
        }));
    }

    updateSong(song: SongRequestDto): Observable<SongRequestDto> {
        return this.http.put<SongRequestDto>(`${this.baseURL}/song/${song.songID}`, song);
    }

    searchSong(song: SongRequestDto): Observable<SongDto[]> {
        return this.http.post<SongDto[]>(`${this.baseURL}/song/search`, song);
    }
}
