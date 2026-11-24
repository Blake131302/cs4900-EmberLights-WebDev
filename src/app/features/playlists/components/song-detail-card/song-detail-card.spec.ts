import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongDetailCard } from './song-detail-card';
import { Song } from '../../../../models/song';

describe('SongDetailCard', () => {
  let component: SongDetailCard;
  let fixture: ComponentFixture<SongDetailCard>;

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
      imports: [SongDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SongDetailCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('song', testSong);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the song name', () => {
    expect(fixture.nativeElement.textContent)
      .toContain('Test Song');
  });

  it('should emit the selected song when editing', () => {
    let selectedSong: Song | undefined;

    component.edit.subscribe(song => {
      selectedSong = song;
    });

    fixture.nativeElement.querySelector('button').click();

    expect(selectedSong).toEqual(testSong);
  });
});