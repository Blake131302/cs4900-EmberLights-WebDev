import { Component, inject } from '@angular/core';
import { Statistics } from '../../../shared/interfaces/statistics';
import { RouterLink } from '@angular/router';
import { StatsService } from '../../../services/stats.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  imports: [RouterLink],
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
