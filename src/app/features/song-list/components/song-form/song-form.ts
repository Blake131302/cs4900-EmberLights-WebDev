import { Component, effect, inject, input, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { SongDto, SongRequestDto } from '../../../../models/songDto';
import { SongService } from '../../../../services/song-service';
import { DurationPipe } from '../../../../duration-pipe';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-song-form',
  styleUrl: './song-form.scss',
  templateUrl: './song-form.html',
})
export class SongForm {
  private songService = inject(SongService);
  private formbuilder = inject(FormBuilder);

  songToEdit = input<SongDto>();

  songCreated = output<SongDto>();
  songUpdated = output<SongDto>();
  cancelEdit = output<void>();

  private durationPipe = new DurationPipe();
  
  songForm = this.formbuilder.group({
    songName: ['', [Validators.required]],
    genreID: [null as number | null, [Validators.required]],
    songDuration: ['', [Validators.required]],
    albumID: [null as number | null, [Validators.required]]
  });

  constructor() {
    effect(() => {
      const song = this.songToEdit();
      if(song) {
        this.songForm.patchValue({
          songName: song.songName ?? '',
          genreID: song.genre.genreID ?? null,
          songDuration: this.durationPipe.transform(song.songDuration),
          albumID: song.album.albumID ?? null
        });
      }
    });
  }


  onSubmit(): void {
    if (this.songForm.invalid) return;

    const raw = this.songForm.getRawValue();
    const updatingID = this.songToEdit()?.songID;

    const songData: SongRequestDto = {
      songID: updatingID,
      songName: raw.songName ?? undefined,
      genreID: raw.genreID ?? undefined,
      songDuration: raw.songDuration ?? undefined,
      albumID: raw.albumID ?? undefined
    };

    if (updatingID !== undefined) {
      this.updateSong(updatingID, songData);
    } else {
      this.createSong(songData);
    }
  }

  createSong(songData: SongRequestDto) {
    this.songService.createSong(songData).subscribe({
      next: (createdSong) => {
        this.songCreated.emit(createdSong);
        this.songForm.reset();
      },
      error: (err) => console.error("Failed to create song", err)
    });
  }

  updateSong(id: number, songData: SongRequestDto) {
    this.songService.updateSong(id, songData).subscribe({
      next: (updatedSong) => {
        this.songUpdated.emit(updatedSong);
        this.songForm.reset();
      },
      error: (err) => console.error("Failed to update song", err)
    });
  }

  onCancel() {
    this.songForm.reset();
    this.cancelEdit.emit();
  }
}
