import { Component, input } from '@angular/core';
import { Album } from '../../../../../shared/interfaces/album';

@Component({
  imports: [],
  selector: 'app-album-card',
  styleUrl: './album-card.scss',
  templateUrl: './album-card.html',
})
export class AlbumCard {
  
  readonly album = input.required<Album>();
}
