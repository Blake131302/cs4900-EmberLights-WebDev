import { Component, DestroyRef, HostListener, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmCancel } from '../../../../shared/components/confirm-cancel/confirm-cancel';
import { GenreService } from '../../../../services/genre-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of } from 'rxjs';
import { Genre } from '../../../../models/Genre';
import { FormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { PlaylistService } from '../../../../services/playlist-list-service';
import { LibraryPlaylistsDetails } from '../../../library/components/library-playlists-details/library-playlists-details';
import { readonly } from '@angular/forms/signals';
import { HasUnsavedChanges } from '../../../../shared/interfaces/unsaved-changes.guard';

@Component({
  imports: [MatDialogModule, ɵInternalFormsSharedModule, ReactiveFormsModule, LibraryPlaylistsDetails],
  selector: 'app-create-page',
  styleUrl: './create-page.scss',
  templateUrl: './create-page.html',
})
export class CreatePage implements HasUnsavedChanges {
  private dialog = inject(MatDialog);
  private genreService = inject(GenreService);
  private playlistService = inject(PlaylistService);

  private destroyRef = inject(DestroyRef);

  // Temporary for Development REMOVE LATER
  readonly playlists = this.playlistService.playlists;

  readonly genres = toSignal(
    this.genreService.getGenres().pipe(
      catchError(err => {
        console.error("Failed to load genres:", err);
        return of<Genre[]>([])
      })
    ),
    {initialValue: [] }
  );

  private formbuilder = inject(FormBuilder);
  playlistForm = this.formbuilder.group({
    playlistName: ['', [Validators.required]],
    genreID: [null as number | null, [Validators.required]],
    numberOfSongs: [null as number | null, [Validators.required]]
  });

  onSubmit(): void {
    if (this.playlistForm.invalid) return;

    const raw = this.playlistForm.getRawValue();
    this.playlistService.addPlaylist(raw.playlistName ?? '', raw.genreID ?? 0);
    console.log("Wrote Playlist");
    this.playlistForm.reset();
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.playlistForm.dirty) {
      return this.openDialog();
    }
    return true;
  }

  openDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmCancel, {
      width: '400px',
      disableClose: true,
      data: { name: 'Create Playlist' },
    });

    return dialogRef.afterClosed();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    event.preventDefault();
  }
}
