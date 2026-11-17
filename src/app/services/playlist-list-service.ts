import { Injectable, signal } from '@angular/core';
import { Playlist } from '../models/Playlist';

@Injectable({
    providedIn: 'root',
})
export class PlaylistListService {

    private _playlists = signal<Playlist[]>(this.getTestPlaylists());
    private readonly playlists = this._playlists.asReadonly();


    getPlaylits(): Playlist[] {
        return this.playlists();
    }

    private getTestPlaylists(): Playlist[] {
        return [
            { id: 1, name: 'Song 1', genre: 'Rock', creation: '00:03:45', songs: 8 },
            { id: 2, name: 'Song 2', genre: 'Pop', creation: '00:04:20', songs: 7 },
            { id: 3, name: 'Song 3', genre: 'Folk', creation: '00:05:10', songs: 4 },
            { id: 4, name: 'Song 4', genre: 'Metal', creation: '00:06:30', songs: 10 },
        ];
    }
}
