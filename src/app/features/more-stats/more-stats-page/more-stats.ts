import { Component, inject } from '@angular/core';
import { StatsService } from '../../../services/stats.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  imports: [],
  selector: 'app-more-stats',
  styleUrl: './more-stats.scss',
  templateUrl: './more-stats.html',
})
export class MoreStats {
  private statsService = inject(StatsService);

  moreStats = toSignal(this.statsService.getStats(), {
    initialValue: {
      totalPlaylists: 0,
      totalArtists: 0,
      totalGenres: 0,
      totalSongs: 0,
      totalUsers: 0,
      topArtist: "",
      topGenre: "",
      topSong: ""
    },
  });
}
