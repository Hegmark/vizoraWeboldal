import { Routes } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { ReaderLoginComponent } from './pages/reader-login/reader-login.component';
import { ReaderRegistComponent } from './pages/reader-regist/reader-regist.component';
import { CivilListComponent } from './pages/civil-list/civil-list.component';
import { AddressRegisterComponent } from './pages/address-register/address-register.component';
import { ReaderDataComponent } from './pages/reader-data/reader-data.component';
import { CivilDataComponent } from './pages/civil-data/civil-data.component';
import { ErrorComponent } from './pages/error/error.component';
import { ReaderListComponent } from './pages/reader-list/reader-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/guard.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: InitialComponent },
    { path: 'reader-login', component: ReaderLoginComponent },
    { path: 'reader-register', component: ReaderRegistComponent },
    { path: 'civil-list', component: CivilListComponent },
    { path: 'address-register', component: AddressRegisterComponent },
    { path: 'reader-data', component: ReaderDataComponent, canActivate:[AuthGuard] },
    { path: 'civil-data', component: CivilDataComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'reader-list', component: ReaderListComponent, canActivate:[AuthGuard]},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];
