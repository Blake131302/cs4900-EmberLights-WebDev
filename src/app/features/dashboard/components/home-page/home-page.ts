import { Component, inject } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Album } from '../../../../shared/interfaces/album';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  private albumService = inject(AlbumsService);

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

  recentAlbums = toSignal(this.albumService.getAlbums(), {
  initialValue: []
  });
}
