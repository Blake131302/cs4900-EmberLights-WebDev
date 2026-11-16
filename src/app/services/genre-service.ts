import { Injectable, signal } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
    providedIn: 'root',
})
export class GenreService {
    //Will later use a constructor with an API service
    // Apparently using a readonly copy of the signal is a good practice to prevent external mutation
    private _genres = signal<Genre[]>(this.getMockGenres());
    private readonly genres = this._genres.asReadonly();

    addGenre(genre: Genre): void {
        // Use update not direct assignment to ensure reactivity
        this._genres.update((genres) => [...genres, genre]);
    }

    getGenres(): Genre[] {
        return this.genres();
    }

    private getMockGenres(): Genre[] {
        return [
            { id: 1, name: 'Rock' },
            { id: 2, name: 'Pop' },
            { id: 3, name: 'Folk' },
            { id: 4, name: 'Metal' },
        ];
    }
}
