import { Component } from '@angular/core';
import { Statistics } from '../../shared/statistics';

@Component({
  imports: [],
  selector: 'app-more-stats',
  styleUrl: './more-stats.scss',
  templateUrl: './more-stats.html',
})
export class MoreStats {

  totalStats: Statistics =
    {totalPlaylists: 300, totalArtists: 900, totalGenres: 10, totalSongs: 2000}
}
