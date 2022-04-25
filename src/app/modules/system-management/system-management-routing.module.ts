import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'problem-management',
        loadChildren: () => import('./problem-management/problem-management.module').then(m => m.ProblemManagementModule)
    },
    {
        path: 'problem-category',
        loadChildren: () => import('./problem-category/problem-category.module').then(m => m.ProblemCategoryModule)
    },
    {
        path: 'team-management',
        loadChildren: () => import('./team-management/team-management.module').then(m => m.TeamManagementModule)
    },
    {
        path: 'problem-cause',
        loadChildren: () => import('./problem-cause/problem-cause.module').then(m => m.ProblemCauseModule)
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
