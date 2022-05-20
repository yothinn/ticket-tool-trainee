import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WorkingComponent } from './working/working.component';

const routes: Route[] = [
    {
        path: '',
        component: WorkingComponent,
        data: { breadcrumb: null }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class WorkingDayRoutingModule { }
