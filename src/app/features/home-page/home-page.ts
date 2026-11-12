import { Component } from '@angular/core';
import { Statistics } from '../../shared/statistics';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

}
