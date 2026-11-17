import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../shared/interfaces/album';

@Service()
export class AlbumsService {
  // GET albums
  getAlbums(): Observable<Album[]> {
    // Call API service `/albums` and return JSON data

    return of(this.getMockAlbums());
  }

  // Mock data for albums
  private getMockAlbums(): Album[] {
    return [
    { albumID: 1, albumName: 'Ride The Lightning', artistName: 'Metallica' },
    { albumID: 2, albumName: 'Toxicity', artistName: 'System of a Down' },
    { albumID: 3, albumName: 'Superheaven', artistName: 'Superheaven' },
    { albumID: 4, albumName: 'Master of Puppets', artistName: 'Metallica' },
    { albumID: 5, albumName: 'Paranoid', artistName: 'Black Sabbath' },
    { albumID: 6, albumName: 'Painkiller', artistName: 'Judas Priest' },
    { albumID: 7, albumName: 'The Number of the Beast', artistName: 'Iron Maiden' },
    { albumID: 8, albumName: 'Rust in Peace', artistName: 'Megadeth' },
    { albumID: 9, albumName: 'Reign in Blood', artistName: 'Slayer' },
    { albumID: 10, albumName: 'Vulgar Display of Power', artistName: 'Pantera' },
    { albumID: 11, albumName: 'Master of Reality', artistName: 'Black Sabbath' },
    { albumID: 12, albumName: 'Holy Diver', artistName: 'Dio' },
    { albumID: 13, albumName: 'Mirror Reaper', artistName: 'Bell Witch' },
    { albumID: 14, albumName: 'Blackwater Park', artistName: 'Opeth' },
    { albumID: 15, albumName: 'Leviathan', artistName: 'Mastodon' },
    { albumID: 16, albumName: 'Heartwork', artistName: 'Carcass' },
    { albumID: 17, albumName: 'Sehnsucht', artistName: 'Rammstein' },
    { albumID: 18, albumName: 'Fear Inoculum', artistName: 'Tool' },
    { albumID: 19, albumName: 'The Black Parade', artistName: 'My Chemical Romance' },
    { albumID: 20, albumName: 'Ace of Spades', artistName: 'Motörhead' },
    ];
  }
}
