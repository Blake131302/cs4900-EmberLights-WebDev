import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { SongDto, SongRequestDto } from '../../../../models/songDto';
import { SongService } from '../../../../services/song-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-song-form',
  styleUrl: './song-form.scss',
  templateUrl: './song-form.html',
})
export class SongForm {
  private songService = inject(SongService);
  private formbuilder = inject(FormBuilder)
  
  songForm = this.formbuilder.group<ControlsOf<SongRequestDto>>({
    songName: this.formbuilder.control('', [Validators.required]),
    genreID: this.formbuilder.control<number | null>(null, [Validators.required]),
    songDuration: this.formbuilder.control('', [Validators.required]),
    albumID: this.formbuilder.control(null, [Validators.required])
  });

  onSubmit(): void {
    if (this.songForm.valid) {
      const raw = this.songForm.getRawValue();
      const songData: SongRequestDto = {
        songID: undefined,
        songName: raw.songName ?? undefined,
        genreID: raw.genreID ?? undefined,
        songDuration: raw.songDuration ?? undefined,
        albumID: raw.albumID ?? undefined
      };
      console.log("Creating Song...")
      this.songService.createSong(songData).subscribe();
      
    } else {
      console.log("Form not valid")
    }
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: undefined extends T[K]
    ? FormControl<T[K] | null>
    : T[K] extends Record<string, any>
      ? FormGroup<ControlsOf<T[K]>>
      : FormControl<T[K]>;
};
