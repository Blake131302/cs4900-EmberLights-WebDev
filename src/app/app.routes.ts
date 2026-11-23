import { Routes } from '@angular/router';
import { CreatePage } from './features/create-playlist/components/create-page/create-page';
import { SongList } from './features/song-list/components/song-list/song-list';


export const routes: Routes = [
    { path: 'create-playlist', component: CreatePage},
    { path: 'song-list', component: SongList }
];
