import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumList } from './album-list/album-list';

@Component({
  imports: [RouterOutlet, AlbumList],  
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OffTheCharts');
}
