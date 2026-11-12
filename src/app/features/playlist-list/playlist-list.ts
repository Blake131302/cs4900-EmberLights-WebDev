import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-playlist-list',
  styleUrl: './playlist-list.scss',
  templateUrl: './playlist-list.html',
  standalone: true, 
})
export class PlaylistList {

  playlists = [
    {id: 1, name:'Ultimate Rock Mix', genre:'Rock', nos:8, duration: 1000},
    {id: 2, name:'Late Night Pop Beats', genre:'Pop', nos:7, duration: 1500},
    {id: 3, name:'Heavy Metal Thunder', genre:'Metal', nos:4, duration: 1650},
    {id: 4, name:'Folk & Sea Harmonies', genre:'Folk', nos:10, duration: 1400}
  ];

  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}
