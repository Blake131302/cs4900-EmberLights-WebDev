import { Component, input } from '@angular/core';
import { SongDto } from '../../../../models/songDto';
import { DurationPipe } from '../../../../duration-pipe';

@Component({
  imports: [DurationPipe],
  selector: 'app-song-details',
  standalone: true,
  styleUrl: './song-details.scss',
  templateUrl: './song-details.html',
})
export class SongDetails {
  //Require a signal input for song
  song = input.required<SongDto>();
}
