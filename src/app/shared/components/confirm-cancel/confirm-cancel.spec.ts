import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmCancel } from './confirm-cancel';

describe('ConfirmCancel', () => {
  let component: ConfirmCancel;
  let fixture: ComponentFixture<ConfirmCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCancel],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmCancel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
