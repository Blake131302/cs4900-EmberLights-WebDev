import { Component, signal } from '@angular/core';
import { Albums } from './albums/albums';

@Component({
  imports: [Albums],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OffTheCharts');
}
