import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamInfoViewComponent } from './team-info-view/team-info-view.component';
import { TeamContactViewComponent } from './team-contact-view/team-contact-view.component';
import { TeamContactEditComponent } from './team-contact-edit/team-contact-edit.component';
import { TeamInfoEditComponent } from './team-info-edit/team-info-edit.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamCardInfoComponent } from './team-card-info/team-card-info.component';



@NgModule({
  declarations: [
    TeamManagementComponent,
    TeamInfoViewComponent,
    TeamContactViewComponent,
    TeamContactEditComponent,
    TeamInfoEditComponent,
    TeamCardInfoComponent
  ],
  imports: [
    TeamManagementRoutingModule
  ]
})
export class TeamManagementModule { }
