import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlaylistSongList } from './playlist-song-list';

describe('PlaylistSongList', () => {
  let component: PlaylistSongList;
  let fixture: ComponentFixture<PlaylistSongList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSongList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistSongList);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const httpTesting = TestBed.inject(HttpTestingController);

    httpTesting.expectOne(
      '/off-the-charts/song'
    ).flush([]);

    await fixture.whenStable();
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an empty song list', () => {
    expect(component.displayedSongs()).toEqual([]);
    expect(component.loadError()).toBe(false);
  });

  it('should refresh songs', () => {
    component.refreshSongs();

    const httpTesting = TestBed.inject(HttpTestingController);
    const request = httpTesting.expectOne('/off-the-charts/song');

    expect(request.request.method).toBe('GET');

    request.flush([]);
  });

  it('should handle loading errors', () => {
    component.refreshSongs();

    const httpTesting = TestBed.inject(HttpTestingController);

    httpTesting.expectOne('/off-the-charts/song').flush(
      'Server error',
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

    expect(component.loadError()).toBe(true);
    expect(component.displayedSongs()).toEqual([]);
  });
});