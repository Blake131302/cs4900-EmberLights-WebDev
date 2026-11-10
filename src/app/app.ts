import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaylistList } from './features/playlist-list/playlist-list';

@Component({
  imports: [RouterOutlet, PlaylistList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OffTheCharts');
}
