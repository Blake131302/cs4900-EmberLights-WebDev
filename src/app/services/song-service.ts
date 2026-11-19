import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SongDto, SongRequestDto } from '../models/songDto';

@Injectable({
    providedIn: 'root',
})
export class SongService {
    private readonly http = inject(HttpClient);
    private readonly baseURL = environment.apiURL;

    getSongs(): Observable<SongDto[]> {
        return this.http.get<SongDto[]>(`${this.baseURL}/song`);
    }

    getSongById(songID: number): Observable<SongDto> {
        return this.http.get<SongDto>(`${this.baseURL}/song/${songID}`);
    }

    createSong(song: SongRequestDto): Observable<SongDto> {
        return this.http.post<SongDto>(`${this.baseURL}/song`, song);
    }

    updateSong(song: SongRequestDto): Observable<SongRequestDto> {
        return this.http.put<SongRequestDto>(`${this.baseURL}/song/${song.songID}`, song);
    }
}
