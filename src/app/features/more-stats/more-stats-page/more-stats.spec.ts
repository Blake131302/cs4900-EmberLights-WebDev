import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreStats } from './more-stats';

describe('MoreStats', () => {
  let component: MoreStats;
  let fixture: ComponentFixture<MoreStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreStats],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
