import { Routes } from '@angular/router';
import { PlaylistDetail } from './features/playlists/components/playlist-detail/playlist-detail';

export const routes: Routes = [
  { path: 'playlists/:id', component: PlaylistDetail },
];
