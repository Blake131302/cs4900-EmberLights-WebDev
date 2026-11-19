import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PlaylistSong } from './playlist-song';

describe('PlaylistSong', () => {
  let service: PlaylistSong;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaylistSong,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });

    service = TestBed.inject(PlaylistSong);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});