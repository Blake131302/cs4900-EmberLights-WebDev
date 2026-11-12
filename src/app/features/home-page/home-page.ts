import { Component } from '@angular/core';

interface Stats {
  totalPlaylists: number;
  totalArtists: number;
  totalGenres: number;
  totalSongs: number;
}
@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  monthlyStats: Stats = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

}
