import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SlaHolidayComponent } from './sla-holiday/sla-holiday.component';

const routes: Route[] = [
    {
        path: '',
        component: SlaHolidayComponent,
        data: { breadcrumb: null }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class SlaHolidayRoutingModule { }
