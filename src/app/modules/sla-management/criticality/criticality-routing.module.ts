import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CriticalityComponent } from './criticality/criticality.component';


const routes: Route[] = [
    {
        path: '',
        component: CriticalityComponent,
        data: { breadcrumb: null }
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class CriticalityRoutingModule { }