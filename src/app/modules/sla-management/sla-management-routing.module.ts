import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'holiday',
    //     loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule),
    //     data: { breadcrumb: 'Holiday' }
    // },
    // {
    //     path: 'problem-category',
    //     loadChildren: () => import('./problem-category/problem-category.module').then(m => m.ProblemCategoryModule),
    //     data: { breadcrumb: 'Problem Category' }
    // },
    // {
    //     path: 'problem-cause',
    //     loadChildren: () => import('./problem-cause/problem-cause.module').then(m => m.ProblemCauseModule),
    //     data: { breadcrumb: 'Problem Cause' }
    // }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],

})
export class SlaManagementRoutingModule { }
