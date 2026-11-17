import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';
import { HomePage } from './features/dashboard/components/home-page/home-page';
import { MoreStats } from './features/more-stats/more-stats-page/more-stats';
import { HelpPage } from './features/dashboard/components/help-page/help-page';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
    { path: '', component: HomePage },
    { path: 'more-stats', component: MoreStats },
    { path: 'help', component: HelpPage}
];
