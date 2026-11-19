import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { PlaylistSongList } from './playlist-song-list';
import { PlaylistSong } from '../../../../services/playlist-song';

describe('PlaylistSongList', () => {
  let component: PlaylistSongList;
  let fixture: ComponentFixture<PlaylistSongList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSongList],
      providers: [
        PlaylistSong,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistSongList);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const httpTesting = TestBed.inject(HttpTestingController);
    httpTesting.expectOne(
      'https://jsonplaceholder.typicode.com/albums?_limit=10'
    ).flush([]);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});