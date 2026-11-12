import { Component } from '@angular/core';
import { PlaylistSongList } from '../playlist-song-list/playlist-song-list';
import { ReplaceConfirmation } from '../../../../shared/components/confirm-replace/replace-confirmation';

@Component({
  selector: 'app-playlist-detail',
  imports: [PlaylistSongList, ReplaceConfirmation],
  templateUrl: './playlist-detail.html',
  styleUrl: './playlist-detail.scss',
})
export class PlaylistDetail {

}
