import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongList } from './features/song-list/song-list';

@Component({
  imports: [RouterOutlet, SongList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OffTheCharts');
}
