import { Component, inject, output, signal } from '@angular/core';
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
  private formbuilder = inject(FormBuilder);

  songCreated = output<SongDto>();
  
  songForm = this.formbuilder.group({
    songName: ['', [Validators.required]],
    genreID: [null as number | null, [Validators.required]],
    songDuration: ['', [Validators.required]],
    albumID: [null, [Validators.required]]
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
      this.songService.createSong(songData).subscribe({
        next: (createdSong) => {
          this.songCreated.emit(createdSong);
          this.songForm.reset();
        },
        error: (err) => console.error("Failed to create song", err)
      });
      
    } else {
      console.log("Form not valid")
    }
  }
}
