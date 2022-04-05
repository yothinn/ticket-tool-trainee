import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TeamManagementComponent } from './team-management.component';

const routes: Route[] = [
    {
        path: '',
        component: TeamManagementComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
})
export class TeamManagementRoutingModule { }
