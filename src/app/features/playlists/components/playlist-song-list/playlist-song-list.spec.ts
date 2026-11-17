import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistSongList } from './playlist-song-list';
import { PlaylistSong } from '../../../../services/playlist-song';

describe('PlaylistSongList', () => {
  let component: PlaylistSongList;
  let fixture: ComponentFixture<PlaylistSongList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSongList],
      providers: [PlaylistSong],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistSongList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});