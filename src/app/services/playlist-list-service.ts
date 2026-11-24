import { inject, Injectable, signal } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { GenreService } from './genre-service';
import { Genre } from '../models/Genre';

@Injectable({
    providedIn: 'root',
})
export class PlaylistService {
    
    private readonly http = inject(HttpClient);
    private readonly baseUrl = environment.apiUrl;

    genreService = inject(GenreService);
    genre = signal<Genre[]>([]);

    playlists = signal<Playlist[]>([]);

    getPlaylists(): Observable<Playlist[]>{
        return this.http.get<Playlist[]>(`${this.baseUrl}/playlist`)
    }

    addPlaylist(name: string, genre: number): void {
        const trimmedName = name.trim();
        if (!trimmedName) return;

        this.genreService.getGenreById(genre).subscribe({
            next: (fetchedGenre: Genre) => {
                this.playlists.update(list => [
                ...list,
                {
                    playlistID: list.length + 1,
                    playlistName: trimmedName,
                    genres: fetchedGenre,
                    creationTime: new Date().toISOString().slice(0, 10),
                    numberSongs: 0
                }
                ]);
            },
            error: (err) => {
                console.error('Could not fetch genre:', err);
            }
        });
    }
}
