import { Component, inject, input, Input, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlbumsService } from '../../../../../services/albums.service';
import { Router } from '@angular/router';
import { HomePage } from '../home-page';
import { Album } from '../../../../../shared/interfaces/album.interface';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-album-form',
  styleUrl: './album-form.scss',
  templateUrl: './album-form.html',
})
export class AlbumForm {

  private readonly fb = inject(FormBuilder);
  private readonly albumService = inject(AlbumsService);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly errMessage = signal<string | null>(null);

  albumCreated = output<Album>();

  readonly form: FormGroup = this.fb.group({
    albumName: ['', [Validators.required, Validators.maxLength(100)]],
    artistName: ['', [Validators.required, Validators.maxLength(60)]]
  });

  // Send a signal to HomePage to add new album form to end of table
  onSubmit(): void {
    if (this.form.invalid || this.isSubmitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errMessage
.set(null);

    const payload = this.form.value;

    this.albumService.addAlbum(payload).subscribe({
      next: (createdAlbum) => {
        this.isSubmitting.set(false);
        this.albumCreated.emit(payload)
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.errMessage
    .set('Failed to create album.');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['']);
  }

}
