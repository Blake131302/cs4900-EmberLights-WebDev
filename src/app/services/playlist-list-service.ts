import { Injectable, Service, signal } from '@angular/core';
import { Playlist } from '../models/Playlist';

@Injectable({
    providedIn: 'root',
})
export class PlaylistService {
    

    private _playlists = signal<Playlist[]>(this.getTestPlaylists());
    private readonly playlists = this._playlists.asReadonly();

    getPlaylists(): Playlist[] {
        return this.playlists();
    }

    private getTestPlaylists(): Playlist[] {
        return [
            { id: 1, name: 'Ultimate Rock Mix', genre: 'Rock', creation: '2019:03:15', nos: 8 },
            { id: 2, name: 'Late Night Pop Beats', genre: 'Pop', creation: '2025:04:25', nos: 7 },
            { id: 3, name: 'Heavy Metal Thunder', genre: 'Folk', creation: '2026:05:10', nos: 4 },
            { id: 4, name: 'Folk & Sea Harmonies', genre: 'Metal', creation: '2026:06:20', nos: 10 },
        ];
    }
}
