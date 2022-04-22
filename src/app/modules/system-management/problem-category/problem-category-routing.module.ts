import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProblemCategoryComponent } from './problem-category/problem-category.component';

const routes: Route[] = [
    {
        path: '',
        component: ProblemCategoryComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class ProblemCategoryRoutingModule { }
