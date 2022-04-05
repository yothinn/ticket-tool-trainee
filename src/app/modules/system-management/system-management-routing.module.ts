import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'problem-management',
        loadChildren: () => import('./problem-management/problem-management.module').then(m => m.ProblemManagementModule)
    },
    {
        path: 'team-management',
        loadChildren: () => import('./team-management/team-management.module').then(m => m.TeamManagementModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],

})
export class SystemManagementRoutingModule { }
