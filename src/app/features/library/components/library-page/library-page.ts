import { Component } from '@angular/core';
import { LibraryPlaylistList } from '../library-playlist-list/library-playlist-list';

@Component({
  imports: [LibraryPlaylistList],
  selector: 'app-library-page',
  styleUrl: './library-page.scss',
  templateUrl: './library-page.html',
})
export class LibraryPage {}
