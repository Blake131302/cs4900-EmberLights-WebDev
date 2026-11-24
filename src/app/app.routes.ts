import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';
import { SongList } from './features/song-list/components/song-list/song-list';
import { CreatePage } from './features/create-playlist/components/create-page/create-page';

export const routes: Routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
    { path: 'song-list', component: SongList },
    { path: 'create-playlist', component: CreatePage}
];
