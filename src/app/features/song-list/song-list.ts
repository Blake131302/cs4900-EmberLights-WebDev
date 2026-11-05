import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'song-list',
  styleUrl: './song-list.scss',
  templateUrl: './song-list.html',
  standalone: true,
})
export class SongList {
  songs: Song[] = [
    { id: 1, name: "Bones in the Ocean", genre: "Folk", duration: 193, album: "Bones in the Ocean", artist: "The Longest Johns" },
    { id: 2, name: "Dog Days are Over", genre: "Indie Pop", duration: 220, album: "Lungs", artist: "Florence + The Machine"},
    { id: 3, name: "Enter Sandman", genre: "Metal", duration: 331, album: "Metallica", artist: "Metallica"},
    { id: 4, name: "Bohemian Rhapsody", genre: "Rock", duration: 354, album: "A Night at the Opera", artist: "Queen"}
  ];

  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}

//Mock display data type for a song
interface Song {
  id: number;
  name: string;
  genre: string;
  duration: number; // Duration in seconds
  album: string;
  artist: string;
}