import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'problem-management',
        loadChildren: () => import('./problem-management/problem-management.module').then(m => m.ProblemManagementModule),
        data: {
            breadcrumb: 'Problem Management'
        }
    },
    {
        path: 'problem-category',
        loadChildren: () => import('./problem-category/problem-category.module').then(m => m.ProblemCategoryModule),
        data: {
            breadcrumb: 'Problem Category'
        }
    },
    {
        path: 'team-management',
        loadChildren: () => import('./team-management/team-management.module').then(m => m.TeamManagementModule),
        data: {
            breadcrumb: 'Team Management'
        }
    },
    {
        path: 'problem-cause',
        loadChildren: () => import('./problem-cause/problem-cause.module').then(m => m.ProblemCauseModule),
        data: {
            breadcrumb: 'Problem Cause'
        }
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
