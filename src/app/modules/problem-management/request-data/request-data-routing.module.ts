import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RequestDataComponent } from './request-data/request-data.component';

const routes: Route[] = [
    {
        path: '',
        component: RequestDataComponent,
        data: { breadcrumb: null }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class RequestDataRoutingModule { }
