import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongDetailCard } from './song-detail-card';

describe('SongDetailCard', () => {
  let component: SongDetailCard;
  let fixture: ComponentFixture<SongDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SongDetailCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('song', {
      id: 1,
      name: 'Test Song'
    });

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});