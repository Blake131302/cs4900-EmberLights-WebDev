import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBar } from './nav-bar';

describe('NavBar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // Fails because there is no provider for the router, which the component uses
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
