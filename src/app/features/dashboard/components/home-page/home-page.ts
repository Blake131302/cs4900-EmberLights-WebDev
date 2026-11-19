import { Component, inject } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Album } from '../../../../shared/interfaces/album';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
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

  //   albumForm = new FormGroup({
  //   albumName: new FormControl(''),
  //   artistName: new FormControl('')
  // });

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
  }
}
