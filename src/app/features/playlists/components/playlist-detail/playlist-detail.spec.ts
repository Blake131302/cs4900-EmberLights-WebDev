import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlaylistDetail } from './playlist-detail';

describe('PlaylistDetail', () => {
  let component: PlaylistDetail;
  let fixture: ComponentFixture<PlaylistDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetail],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistDetail);
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
});