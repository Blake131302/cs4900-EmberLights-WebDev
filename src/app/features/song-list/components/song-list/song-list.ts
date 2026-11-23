import { Component, inject, signal } from '@angular/core';
import { SongService } from '../../../../services/song-service';
import { SongDetails } from '../song-details/song-details';
import { SongDto, SongRequestDto } from '../../../../models/songDto';
import { SongForm } from '../song-form/song-form';

@Component({
  imports: [SongDetails, SongForm],
  selector: 'song-list',
  styleUrl: './song-list.scss',
  templateUrl: './song-list.html',
  standalone: true,
})
export class SongList {
  private songService = inject(SongService);
  readonly songs = this.songService.songs;

  ngOnInit() {
    this.songService.getSongs().subscribe()
  }
}
