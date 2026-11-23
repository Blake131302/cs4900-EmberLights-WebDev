import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongDetails } from './song-details';
import { Song } from '../../../../models/song';

describe('SongDetails', () => {
  let component: SongDetails;
  let fixture: ComponentFixture<SongDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SongDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('song', mockSong);
    await fixture.whenStable();
  });

  //Mock a Song object to test the song input
  const mockSong: Song = {
    id: 1,
    name: 'Test Song',
    genre: 'Test Genre',
    duration: '3:30',
    album: 'Test Album',
    artist: 'Test Artist',
  };

  it('should have a song input', () => {
    expect(component.song).toBeDefined();
  });

  it('should have a song input of type signal<Song>', () => {
    expect(typeof component.song).toBe('function');
  });

  it('should have a song input of type signal<Song> with a value of type Song', () => {
    const songValue = component.song();
    expect(songValue).toBeDefined();
    expect(songValue).toHaveProperty('id');
    expect(songValue).toHaveProperty('name');
    expect(songValue).toHaveProperty('genre');
    expect(songValue).toHaveProperty('duration');
    expect(songValue).toHaveProperty('album');
    expect(songValue).toHaveProperty('artist');
  });

  it('should have a song input of type signal<Song> with a value of type Song with correct types', () => {
    const songValue = component.song();
    expect(typeof songValue.id).toBe('number');
    expect(typeof songValue.name).toBe('string');
    expect(typeof songValue.genre).toBe('string');
    expect(typeof songValue.duration).toBe('string');
    expect(typeof songValue.album).toBe('string');
    expect(typeof songValue.artist).toBe('string');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
