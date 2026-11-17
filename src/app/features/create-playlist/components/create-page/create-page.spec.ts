import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePage } from './create-page';

describe('CreatePage', () => {
  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dialog', () => {
    expect(component['dialog']).toBeDefined();
  });

  it('should have an openDialog method', () => {
    expect(component.openDialog).toBeDefined();
  });
});
