import { Routes } from '@angular/router';
import { HomePage } from './features/dashboard/components/home-page/home-page';
import { MoreStats } from './features/more-stats/more-stats-page/more-stats';
import { HelpPage } from './features/dashboard/components/help-page/help-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'more-stats', component: MoreStats },
    { path: 'help', component: HelpPage}
];
