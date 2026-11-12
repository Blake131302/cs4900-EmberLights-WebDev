import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { MoreStats } from './features/more-stats/more-stats';

export const routes: Routes = [
    { path: '', component: HomePage, title: 'Home Page' },
    { path: 'more-stats', component: MoreStats, title: 'More Statistic' }
];
