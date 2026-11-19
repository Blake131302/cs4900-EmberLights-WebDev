import { Injectable } from '@angular/core';
import { Statistics } from '../shared/interfaces/statistics';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StatsService {

    // GET statistics. Visible in dashboard and `more-stats` screen 
    getStats(): Observable<Statistics> {

        // Call API service `/statistics` and return JSON data

        // const totalStats: Statistics = {totalPlaylists: 300, totalArtists: 900, totalGenres: 10, totalSongs: 2000}
        return of(this.getMockStats());
    }

    // Mock data for statistics
    private getMockStats(): Statistics {
        return {
            totalPlaylists: 300,
            totalArtists: 900,
            totalGenres: 10,
            totalSongs: 2000,
            totalUsers: 500,
            topArtist: "Ladrones",
            topSong: "General Taylor",
            topGenre: "Rock"
        }
    }
}
