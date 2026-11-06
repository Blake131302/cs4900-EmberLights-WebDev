import { Component } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  imports: [],
  selector: 'app-albums',
  styleUrl: './albums.scss',
  templateUrl: './albums.html',
})
export class Albums {

  // Create an array called albums[]
  rec_albums: Album[] = [
    {albumID: 1, albumName: "Ride The Lightning", artistName: "Metallica"},
    {albumID: 2, albumName: "Toxicity", artistName: "System of a Down"},
    {albumID: 3, albumName: "Superheaven", artistName: "Superheaven"}
  ];
}
