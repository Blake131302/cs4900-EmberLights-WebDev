import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-album-list',
  styleUrl: './album-list.scss',
  templateUrl: './album-list.html',
})

export class AlbumList {
  albums = [
    { id: 1, name: 'Thriller' },
    { id: 2, name: 'Back in Black' },
    { id: 3, name: 'The Dark Side of the Moon' },
    { id: 4, name: 'Abbey Road' },
    { id: 5, name: 'Nevermind' }
  ];
}