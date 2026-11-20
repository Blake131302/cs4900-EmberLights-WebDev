import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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

  fetchedSongs = toSignal(this.playlistSongService.getSongs(), {
    initialValue: []
  });

  displayedSongs = computed(() => [
    ...this.fetchedSongs(),
    ...this.playlistSongService.songs()
  ]);

  newSongName = signal('');

  onSongNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newSongName.set(input.value);
  }

  addSong(): void {
    this.playlistSongService.addSong(this.newSongName());
    this.newSongName.set('');
  }
}