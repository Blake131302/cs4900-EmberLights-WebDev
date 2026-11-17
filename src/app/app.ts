import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteBanner } from './shared/components/site-banner/site-banner';
import { NavBar } from './shared/components/nav-bar/nav-bar';

@Component({
  imports: [RouterOutlet, SiteBanner, NavBar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OffTheCharts');
}
