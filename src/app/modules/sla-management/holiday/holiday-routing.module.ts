import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';

const routes: Route[] = [
    {
        path: '',
        component: HolidayComponent,
        data: { breadcrumb: null }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class HolidayRoutingModule { }