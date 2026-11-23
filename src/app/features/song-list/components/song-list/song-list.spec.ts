import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongList } from './song-list';

describe('SongList', () => {
  let component: SongList;
  let fixture: ComponentFixture<SongList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongList],
    }).compileComponents();

    fixture = TestBed.createComponent(SongList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a songService', () => {
    expect(component.songService).toBeDefined();
  });

  it('should have a newSong signal', () => {
    expect(component.newSong).toBeDefined();
  });

  it('should have an addSong method', () => {
    expect(component.addSong).toBeDefined();
  });

  it('should have updateName, updateGenre, updateDuration, updateAlbum, and updateArtist methods', () => {
    expect(component.updateName).toBeDefined();
    expect(component.updateGenreID).toBeDefined();
    expect(component.updateDuration).toBeDefined();
    expect(component.updateAlbumID).toBeDefined();
    expect(component.updateArtist).toBeDefined();
  });
});
