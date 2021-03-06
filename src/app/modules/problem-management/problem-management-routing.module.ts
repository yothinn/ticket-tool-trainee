import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'problem',
        loadChildren: () => import('./problem/problem.module').then(m => m.ProblemModule),
        data: { breadcrumb: 'Problem' }
    },
    {
        path: 'problem-category',
        loadChildren: () => import('./problem-category/problem-category.module').then(m => m.ProblemCategoryModule),
        data: { breadcrumb: 'Problem Category' }
    },
    {
        path: 'problem-cause',
        loadChildren: () => import('./problem-cause/problem-cause.module').then(m => m.ProblemCauseModule),
        data: { breadcrumb: 'Problem Cause' }
    },
    {
        path: 'request-data',
        loadChildren: () => import('./request-data/request-data.module').then(m => m.RequestDataModule),
        data: { breadcrumb: 'Request Data' }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],

})
export class ProblemManagementRoutingModule { }
