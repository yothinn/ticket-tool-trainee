import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProblemCauseComponent } from './problem-cause/problem-cause.component';

const routes: Route[] = [
    {
        path: '',
        component: ProblemCauseComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class ProblemCauseRoutingModule { }
