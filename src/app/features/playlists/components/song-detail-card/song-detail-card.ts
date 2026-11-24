import { Component, input, output } from '@angular/core';
import { Song } from '../../../../models/song';

@Component({
  selector: 'app-song-detail-card',
  imports: [],
  templateUrl: './song-detail-card.html',
  styleUrl: './song-detail-card.scss',
})
export class SongDetailCard {
  song = input.required<Song>();
  edit = output<Song>();
  editDisabled = input(false);
}