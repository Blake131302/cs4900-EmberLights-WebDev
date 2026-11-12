import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteBanner } from './site-banner';

describe('SiteBanner', () => {
  let component: SiteBanner;
  let fixture: ComponentFixture<SiteBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
