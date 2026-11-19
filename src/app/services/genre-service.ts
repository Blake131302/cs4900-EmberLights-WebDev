import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Genre } from '../models/Genre';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GenreService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = environment.apiUrl;

    genre = signal<Genre[]>([]);

    getGenreById(id: number): Observable<Genre>{
        return this.http.get<Genre>(`${this.baseUrl}/genre/${id}`);
    }
}
