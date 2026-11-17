import { Component, input } from '@angular/core';
import { Playlist } from '../../../../models/Playlist';

@Component({
  imports: [],
  selector: 'app-library-playlists-details',
  styleUrl: './library-playlists-details.scss',
  templateUrl: './library-playlists-details.html',
})
export class LibraryPlaylistsDetails {

  playlist = input.required<Playlist>();
}
