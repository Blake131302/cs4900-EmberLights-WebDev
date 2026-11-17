import { Component, inject, signal } from '@angular/core';
import { PlaylistSong } from '../../../../services/playlist-song';
import { SongDetailCard } from '../song-detail-card/song-detail-card';

@Component({
  imports: [SongDetailCard],
  selector: 'app-playlist-song-list',
  styleUrl: './playlist-song-list.scss',
  templateUrl: './playlist-song-list.html',
})
export class PlaylistSongList {
  playlistSongService = inject(PlaylistSong);

  songs = this.playlistSongService.songs;
  newSongName = signal('');

  addSong(): void {
    this.playlistSongService.addSong(this.newSongName());
    this.newSongName.set('');
  }
}