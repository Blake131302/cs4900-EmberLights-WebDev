import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
    { path: '', component: HomePage },
    { path: 'more-stats', component: MoreStats },
    { path: 'help', component: HelpPage}
];
