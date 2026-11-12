import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistSongList } from './playlist-song-list';

describe('PlaylistSongList', () => {
  let component: PlaylistSongList;
  let fixture: ComponentFixture<PlaylistSongList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSongList],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistSongList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
