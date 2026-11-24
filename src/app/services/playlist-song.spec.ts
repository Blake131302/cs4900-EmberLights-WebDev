import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlaylistSong } from './playlist-song';
import { Song, SongRequestDto } from '../models/song';

describe('PlaylistSong', () => {
  let service: PlaylistSong;
  let httpTesting: HttpTestingController;

  const url = '/off-the-charts/song';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(PlaylistSong);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch songs', () => {
    service.getSongs().subscribe(songs => {
      expect(songs).toEqual([testSong]);
    });

    const request = httpTesting.expectOne(url);

    expect(request.request.method).toBe('GET');

    request.flush([testSong]);
  });

  it('should create a song', () => {
    service.createSong(songData).subscribe(song => {
      expect(song).toEqual(testSong);
    });

    const request = httpTesting.expectOne(url);

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(songData);

    request.flush(testSong);
  });

  it('should update a song', () => {
    const updatedData: SongRequestDto = {
      ...songData,
      songName: 'Updated Song'
    };

    const updatedSong: Song = {
      ...testSong,
      songName: 'Updated Song'
    };

    service.updateSong(1, updatedData).subscribe(song => {
      expect(song).toEqual(updatedSong);
    });

    const request = httpTesting.expectOne(`${url}/1`);

    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual({
      ...updatedData,
      songID: 1
    });

    request.flush(updatedSong);
  });
});