import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { PlaylistDetail } from './playlist-detail';
import { PlaylistSong } from '../../../../services/playlist-song';

describe('PlaylistDetail', () => {
  let component: PlaylistDetail;
  let fixture: ComponentFixture<PlaylistDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetail],
      providers: [
        PlaylistSong,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistDetail);
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