  import { Component, inject, signal } from '@angular/core';
  import { PlaylistService } from '../../../../services/playlist-list-service';
  import { Playlist } from '../../../../models/Playlist';
  import { LibraryPlaylistsDetails } from '../library-playlists-details/library-playlists-details';

  @Component({
    imports: [LibraryPlaylistsDetails],
    selector: 'library-playlist-list',
    styleUrl: 'library-playlist-list.scss',
    templateUrl: 'library-playlist-list.html',
    standalone: true, 
  })
  export class LibraryPlaylistList {

    playlistService = inject(PlaylistService)

    newPlaylist = signal<Playlist>({
      id: 0,
      name: '',
      genre: '',
      creation: '',
      nos: 0
    })

    get playlists() {
      return this.playlistService.getPlaylists();
    }
  }