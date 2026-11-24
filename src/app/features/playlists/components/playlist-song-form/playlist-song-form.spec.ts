import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlaylistSongForm } from './playlist-song-form';
import { Song, SongRequestDto } from '../../../../models/song';

describe('PlaylistSongForm', () => {
  let component: PlaylistSongForm;
  let fixture: ComponentFixture<PlaylistSongForm>;
  let httpTesting: HttpTestingController;

  const songData: SongRequestDto = {
    songName: 'Test Song',
    genreID: 1,
    songDuration: '00:03:45',
    albumID: 1
  };

  const testSong: Song = {
    songID: 1,
    songName: 'Test Song',
    genre: {
      genreID: 1,
      genreName: 'Rock'
    },
    songDuration: [0, 3, 45],
    album: {
      albumID: 1,
      albumName: 'Test Album',
      artistName: 'Test Artist'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSongForm],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistSongForm);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.songForm.invalid).toBe(true);
  });

  it('should be valid with complete song data', () => {
    component.songForm.setValue(songData);

    expect(component.songForm.valid).toBe(true);
  });

  it('should create a song', () => {
    component.songForm.setValue(songData);

    let saved = false;

    component.saved.subscribe(() => {
      saved = true;
    });

    component.onSubmit();

    const request = httpTesting.expectOne(
      '/off-the-charts/song'
    );

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(songData);

    request.flush(testSong);

    expect(saved).toBe(true);
  });

  it('should load the selected song into the form', () => {
    fixture.componentRef.setInput('song', testSong);
    fixture.detectChanges();

    expect(component.songForm.getRawValue())
      .toEqual(songData);
  });

  it('should update a song', () => {
    fixture.componentRef.setInput('song', testSong);
    fixture.detectChanges();

    component.songForm.patchValue({
      songName: 'Updated Song'
    });

    let saved = false;

    component.saved.subscribe(() => {
      saved = true;
    });

    component.onSubmit();

    const request = httpTesting.expectOne(
      '/off-the-charts/song/1'
    );

    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual({
      ...songData,
      songName: 'Updated Song',
      songID: 1
    });

    request.flush({
      ...testSong,
      songName: 'Updated Song'
    });

    expect(saved).toBe(true);
  });

  it('should handle creation errors', () => {
    component.songForm.setValue(songData);

    component.onSubmit();

    httpTesting.expectOne('/off-the-charts/song').flush(
      'Server error',
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

    expect(component.errorMessage())
      .toBe('Could not create song.');

    expect(component.isSubmitting()).toBe(false);
  });
});