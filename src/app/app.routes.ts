import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
];
