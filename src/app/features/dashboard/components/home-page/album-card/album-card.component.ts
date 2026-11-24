import { Component, inject, input, output, signal } from '@angular/core';
import { Album } from '../../../../../shared/interfaces/album.interface';
import { AlbumsService } from '../../../../../services/albums.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-album-card',
  styleUrl: './album-card.scss',
  templateUrl: './album-card.html',
})
export class AlbumCard {
  
  private readonly albumService = inject(AlbumsService);
  private readonly fb = inject(FormBuilder);

  readonly isSubmitting = signal(false);
  readonly errMessage = signal<string | null>(null);

  readonly albumUpdated = output<Album>();

  readonly form: FormGroup = this.fb.group({
    albumName: ['', [Validators.required, Validators.maxLength(100)]],
    artistName: ['', [Validators.required, Validators.maxLength(60)]]
  })

  readonly album = input.required<Album>();

  updateAlbum(albumID: number): void {
    this.form.setValue({
      albumName: "Terraformer",
      artistName: "Thank You Scientist"
    })

    const payload = this.form.value;
    console.log(`Form Value: ${payload}`);
    this.albumService.updateAlbum(albumID, payload).subscribe({
      next: (updatedAlbum) => {
        this.isSubmitting.set(false);
        this.albumUpdated.emit(payload);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.errMessage.set("Failed to update album");
      }
    });
  }
}
