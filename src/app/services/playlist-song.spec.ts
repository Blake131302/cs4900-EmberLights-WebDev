import { TestBed } from '@angular/core/testing';
import { PlaylistSong } from './playlist-song';

describe('PlaylistSong', () => {
  let service: PlaylistSong;

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [PlaylistSong],
  });    
    service = TestBed.inject(PlaylistSong);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
