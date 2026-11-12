import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaceConfirmation } from './replace-confirmation';

describe('ReplaceConfirmation', () => {
  let component: ReplaceConfirmation;
  let fixture: ComponentFixture<ReplaceConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaceConfirmation],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplaceConfirmation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
