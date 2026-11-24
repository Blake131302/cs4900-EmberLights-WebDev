import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Statistics } from '../../../../shared/interfaces/statistics.interface';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../../../../services/albums.service';
import { FormsModule } from '@angular/forms';
import { AlbumCard } from './album-card/album-card.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AlbumForm } from './album-form/album-form';
import { Album } from '../../../../shared/interfaces/album.interface';
import { catchError, of } from 'rxjs';

@Component({
  imports: [RouterLink, FormsModule, AlbumCard, AlbumForm],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  

  albumName = '';
  artistName = '';
  createdAlbum = '';

  ngOnInit(): void {
    this.fetchAlbums();
  }

  private readonly destroyRef = inject(DestroyRef);

  albums = signal<Album[]>([]);

  private albumService = inject(AlbumsService);

  fetchAlbums(): void {
    this.albumService.getAlbums().pipe(
      catchError(err => {
        console.error("Failed to fetch albums: ", err);
        return of<Album[]>([]);
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(fetchedAlbums => {
      this.albums.set(fetchedAlbums);
    })
  }

  monthlyStats: Statistics = 
    {totalPlaylists: 10, totalArtists: 40, totalGenres: 8, totalSongs: 300}
}
