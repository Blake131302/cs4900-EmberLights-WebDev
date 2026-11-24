import { Component, inject, OnInit } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics.interface';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';
import { FormsModule } from '@angular/forms';
import { AlbumCard } from './album-card/album-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { AlbumForm } from './album-form/album-form';

@Component({
  imports: [RouterLink, FormsModule, AlbumCard, AlbumForm],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  

  albumName = '';
  artistName = '';

  private albumService = inject(AlbumsService);

  readonly albums = toSignal(this.albumService.getAlbums(), {
    initialValue: []
  });

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

  recentAlbums = this.albumService.albums;
}
