import { Component, inject } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics.interface';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';
import { FormsModule } from '@angular/forms';
import { AlbumCard } from './album-card/album-card.component';

@Component({
  imports: [RouterLink, FormsModule, AlbumCard],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  albumName = '';
  artistName = '';

  private albumService = inject(AlbumsService);

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}

  recentAlbums = this.albumService.albums;

  submitAlbum() {
    const inAlbum = this.albumName;
    const inArtist = this.artistName;

    if ((inAlbum == '') || (inArtist == '')) {
      alert("Album and Artist needs filled out.")
      return;
    }

    console.log(inAlbum + " " + inArtist);
    this.albumService.addAlbum(inAlbum, inArtist);
    this.albumName = '';
    this.artistName = '';
    this.albumService.getAlbums();
  }
}
