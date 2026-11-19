import { Injectable, signal } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
    providedIn: 'root',
})
export class SongService {
    //Will later use a constructor with an API service
    // Apparently using a readonly copy of the signal is a good practice to prevent external mutation
    private _songs = signal<Song[]>(this.getMockSongs());
    readonly songs = this._songs.asReadonly();

    addSong(song: Song): void {
        // Use update not direct assignment to ensure reactivity
        this._songs.update((songs) => [...songs, song]);
    }

    private getMockSongs(): Song[] {
        return [
            { id: 1, name: 'Song 1', genre: 'Rock', duration: '00:03:45', album: 'Album 1', artist: 'Artist 1' },
            { id: 2, name: 'Song 2', genre: 'Pop', duration: '00:04:20', album: 'Album 2', artist: 'Artist 2' },
            { id: 3, name: 'Song 3', genre: 'Folk', duration: '00:05:10', album: 'Album 3', artist: 'Artist 3' },
            { id: 4, name: 'Song 4', genre: 'Metal', duration: '00:06:30', album: 'Album 4', artist: 'Artist 4' },
        ];
    }
}
