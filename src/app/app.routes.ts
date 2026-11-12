import { Routes } from '@angular/router';
import { HomePage } from './features/dashboard/components/home-page/home-page';
import { MoreStats } from './features/more-stats/more-stats-page/more-stats';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'more-stats', component: MoreStats }
];
