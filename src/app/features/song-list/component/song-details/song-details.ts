import { Component, input } from '@angular/core';
import { Song } from '../../../../models/song';

@Component({
  imports: [],
  selector: 'app-song-details',
  standalone: true,
  styleUrl: './song-details.scss',
  templateUrl: './song-details.html',
})
export class SongDetails {
  //Require a signal input for song
  song = input.required<Song>();
}
