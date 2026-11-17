import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistDetail } from './playlist-detail';
import { PlaylistSong } from '../../../../services/playlist-song';

describe('PlaylistDetail', () => {
  let component: PlaylistDetail;
  let fixture: ComponentFixture<PlaylistDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetail],
      providers: [PlaylistSong],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});