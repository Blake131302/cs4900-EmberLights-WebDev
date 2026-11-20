import { Component, input } from '@angular/core';
import { Album } from '../../../../../shared/interfaces/album.interface';

@Component({
  imports: [],
  selector: 'app-album-card',
  styleUrl: './album-card.scss',
  templateUrl: './album-card.html',
})
export class AlbumCard {
  
  readonly album = input.required<Album>();
}
