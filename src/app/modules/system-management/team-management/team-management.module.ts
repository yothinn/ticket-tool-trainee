import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamInfoViewComponent } from './team-info-view/team-info-view.component';
import { TeamContactViewComponent } from './team-contact-view/team-contact-view.component';
import { TeamContactEditComponent } from './team-contact-edit/team-contact-edit.component';
import { TeamInfoEditComponent } from './team-info-edit/team-info-edit.component';



@NgModule({
  declarations: [
    TeamManagementComponent,
    TeamInfoViewComponent,
    TeamContactViewComponent,
    TeamContactEditComponent,
    TeamInfoEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamManagementModule { }
