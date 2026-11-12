import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryPlaylistList } from './library-playlist-list';

describe('LibraryPlaylistList', () => {
  let component: LibraryPlaylistList;
  let fixture: ComponentFixture<LibraryPlaylistList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryPlaylistList],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryPlaylistList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
