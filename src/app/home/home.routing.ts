import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Under Construction'
        },
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
