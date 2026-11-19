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

    playlists = signal<Playlist[]>([]);

    newPlaylist = signal<Playlist>({
      playlistID: 0,
      playlistName: '',
      genres:{
        genreID: 1,
        genreName: ''
      },
      creationTime: '',
      numberSongs: 0
    })

    onNameInput(event: Event): void {
      const playlistName = (event.target as HTMLInputElement).value;
      this.newPlaylist.update(p => ({ ...p, playlistName }));
    }

    addPlaylist(): void {
      const current = this.newPlaylist();
      this.playlistService.addPlaylist(current.playlistName, current.genres.genreID);
      this.newPlaylist.set({ playlistID: 0, playlistName: '', genres:{genreID: 1,genreName: ''}, creationTime: '', numberSongs: 0 });
    }

    ngOnInit(): void {
      this.playlistService.getPlaylists().subscribe({
        next: (data) => this.playlists.set(data),
        error: (err) => console.error('Failed to fetch data:', err)
      })
    }
  }