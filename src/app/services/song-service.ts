import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

    updateSong(id: number, song: SongRequestDto): Observable<SongDto> {
        const updatedSong: SongRequestDto = {...song, songID: id};
        return this.http.put<SongDto>(`${this.baseURL}/song/${id}`, updatedSong);
    }

    searchSong(song: SongRequestDto): Observable<SongDto[]> {
        return this.http.post<SongDto[]>(`${this.baseURL}/song/search`, song);
    }
}
