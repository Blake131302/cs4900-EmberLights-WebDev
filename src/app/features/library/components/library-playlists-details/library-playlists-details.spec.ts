import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryPlaylistsDetails } from './library-playlists-details';

describe('LibraryPlaylistsDetails', () => {
  let component: LibraryPlaylistsDetails;
  let fixture: ComponentFixture<LibraryPlaylistsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryPlaylistsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryPlaylistsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
