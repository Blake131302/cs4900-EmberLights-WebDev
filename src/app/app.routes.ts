import { Routes } from '@angular/router';
import { LibraryPage } from './features/library/components/library-page/library-page';

export const routes: Routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', component: LibraryPage },
];
