import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlbumsService } from '../../../../../services/albums.service';
import { Router } from '@angular/router';

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
  readonly errMesage = signal<string | null>(null);

  readonly form: FormGroup = this.fb.group({
    albumName: ['', [Validators.required, Validators.maxLength(100)]],
    artistName: ['', [Validators.required, Validators.maxLength(60)]]
  });

  onSubmit(): void {
    if (this.form.invalid || this.isSubmitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errMesage.set(null);

    const payload = this.form.value;

    this.albumService.addAlbum(payload).subscribe({
      next: (createdAlbum) => {
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.errMesage.set('Failed to create album.');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['']);
  }

}
