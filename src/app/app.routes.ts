import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';
import { SongList } from './features/song-list/components/song-list/song-list';
import { CreatePage } from './features/create-playlist/components/create-page/create-page';
import { HelpPage } from './features/dashboard/components/help-page/help-page';
import { HomePage } from './features/dashboard/components/home-page/home-page';
import { MoreStats } from './features/more-stats/more-stats-page/more-stats';
import { PlaylistDetail } from './features/playlists/components/playlist-detail/playlist-detail';
import { AboutPage } from './features/dashboard/components/about-page/about-page';

export const routes: Routes = [
    { path: 'library', component: LibraryPage },
    { path: '', component: HomePage },
    { path: 'more-stats', component: MoreStats },
    { path: 'help', component: HelpPage},
    { path: 'song-list', component: SongList },
    { path: 'create-playlist', component: CreatePage},
    { path: 'playlists/:id', component: PlaylistDetail },
    { path: 'help', component: HelpPage },
    { path: 'about', component: AboutPage }
];