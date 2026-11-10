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
    {id: 1, name:'Ultimate Rock Mix'},
    {id: 2, name:'Late Night Pop Beats'},
    {id: 3, name:'Heavy Metal Thunder'},
    {id: 4, name:'Folk & Sea Harmonies'}
  ];
}
