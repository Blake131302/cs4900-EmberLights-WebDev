import { Component } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

}
