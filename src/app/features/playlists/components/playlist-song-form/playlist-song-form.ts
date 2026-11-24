import {
  Component,
  inject,
  input,
  output,
  signal,
  effect
} from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { finalize } from 'rxjs';
import { PlaylistSong } from '../../../../services/playlist-song';
import { Song, SongRequestDto } from '../../../../models/song';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-playlist-song-form',
  standalone: true,
  templateUrl: './playlist-song-form.html',
  styleUrl: './playlist-song-form.scss',
})
export class PlaylistSongForm {
  private readonly fb = inject(FormBuilder);
  private readonly playlistSongService = inject(PlaylistSong);

  readonly song = input<Song | null>(null);

  readonly saved = output<void>();
  readonly cancelled = output<void>();

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  readonly songForm = this.fb.nonNullable.group({
    songName: [
      '',
      [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(/\S/)
      ]
    ],
    genreID: [
      0,
      [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^\d+$/)
      ]
    ],
    songDuration: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?!00:00:00$)([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
        )
      ]
    ],
    albumID: [
      0,
      [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^\d+$/)
      ]
    ]
  });

  constructor() {
    effect(() => {
      const selectedSong = this.song();

      if (selectedSong) {
        this.songForm.reset({
          songName: selectedSong.songName,
          genreID: selectedSong.genre.genreID,
          songDuration: this.formatDuration(
            selectedSong.songDuration
          ),
          albumID: selectedSong.album.albumID
        });
      } else {
        this.songForm.reset();
      }

      this.errorMessage.set('');
    });
  }

  onSubmit(): void {
    if (this.songForm.invalid || this.isSubmitting()) {
      this.songForm.markAllAsTouched();
      return;
    }

    const songData: SongRequestDto =
      this.songForm.getRawValue();

    songData.songName = songData.songName.trim();

    const selectedSong = this.song();

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    const request = selectedSong
      ? this.playlistSongService.updateSong(
          selectedSong.songID,
          songData
        )
      : this.playlistSongService.createSong(songData);

    request.pipe(
      finalize(() => this.isSubmitting.set(false))
    ).subscribe({
      next: () => {
        this.songForm.reset();
        this.saved.emit();
      },
      error: () => {
        this.errorMessage.set(
          selectedSong
            ? 'Could not update song.'
            : 'Could not create song.'
        );
      }
    });
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  private formatDuration(
    duration: number[] | string
  ): string {
    if (typeof duration === 'string') {
      return duration.length === 5
        ? duration + ':00'
        : duration.slice(0, 8);
    }

    return [
      duration[0] ?? 0,
      duration[1] ?? 0,
      duration[2] ?? 0
    ].map(value =>
      String(value).padStart(2, '0')
    ).join(':');
  }
}