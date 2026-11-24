import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';
import { Song } from '../../../../models/song';
import { PlaylistSong } from '../../../../services/playlist-song';
import { SongDetailCard } from '../song-detail-card/song-detail-card';
import { PlaylistSongForm } from '../playlist-song-form/playlist-song-form';

@Component({
  imports: [SongDetailCard, PlaylistSongForm],
  selector: 'app-playlist-song-list',
  styleUrl: './playlist-song-list.scss',
  templateUrl: './playlist-song-list.html',
})
export class PlaylistSongList {
  private readonly playlistSongService = inject(PlaylistSong);

  readonly loadError = signal(false);
  readonly editingSong = signal<Song | null>(null);

  private readonly refresh$ =
    new BehaviorSubject<void>(undefined);

  readonly displayedSongs = toSignal(
    this.refresh$.pipe(
      switchMap(() =>
        this.playlistSongService.getSongs().pipe(
          catchError(() => {
            this.loadError.set(true);
            return of<Song[]>([]);
          })
        )
      )
    ),
    { initialValue: [] }
  );

  refreshSongs(): void {
    this.loadError.set(false);
    this.refresh$.next();
  }

  editSong(song: Song): void {
    this.editingSong.set(song);
  }

  onSongSaved(): void {
    this.editingSong.set(null);
    this.refreshSongs();
  }

  cancelEdit(): void {
    this.editingSong.set(null);
  }
}