import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { ApiComponent } from './components/api.component';

const appRoutes: Routes = [
    { path : '', component: IndexComponent },
    { path : 'index', component: IndexComponent },
    { path : 'api', component: ApiComponent },
    { path : '**', component: IndexComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule .forRoot( appRoutes );
