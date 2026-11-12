import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';
import { Buttons } from './features/library/components/buttons/buttons';
import { Search } from './features/library/components/search/search';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
    { path: 'library-buttons', component: Buttons },
    { path: 'library-search', component: Search },
];
