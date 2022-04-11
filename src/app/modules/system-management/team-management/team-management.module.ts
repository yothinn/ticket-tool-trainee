import { NgModule } from '@angular/core';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamCardInfoComponent } from './components/team-card-info/team-card-info.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { TeamInfoViewComponent } from './components/team-info-view/team-info-view.component';
import { TeamContactViewComponent } from './components/team-contact-view/team-contact-view.component';
import { TeamContactEditComponent } from './components/team-contact-edit/team-contact-edit.component';
import { TeamInfoEditComponent } from './components/team-info-edit/team-info-edit.component';
import { SharedModule } from 'app/shared/shared.module';
import { TeamInformationEditComponent } from './team-information-edit/team-information-edit.component';
import { TeamInformationViewComponent } from './team-information-view/team-information-view.component';
import { TeamMemberViewComponent } from './components/team-member-view/team-member-view.component';
import { TeamMemberEditComponent } from './components/team-member-edit/team-member-edit.component';
import { ProblemSupportViewComponent } from './components/problem-support-view/problem-support-view.component';
import { ProblemSupportEditComponent } from './components/problem-support-edit/problem-support-edit.component';
import { TeamMemberDialogComponent } from './dialogs/team-member-dialog/team-member-dialog.component';
import { ProblemDialogComponent } from './dialogs/problem-dialog/problem-dialog.component';




@NgModule({
  declarations: [
    TeamManagementComponent,
    TeamInfoViewComponent,
    TeamInfoEditComponent,
    TeamContactViewComponent,
    TeamContactEditComponent,
    TeamCardInfoComponent,
    TeamInformationEditComponent,
    TeamInformationViewComponent,
    TeamMemberViewComponent,
    TeamMemberEditComponent,
    ProblemSupportViewComponent,
    ProblemSupportEditComponent,
    TeamMemberDialogComponent,
    ProblemDialogComponent
  ],
  imports: [
    TeamManagementRoutingModule,
    SharedModule
  ]
})
export class TeamManagementModule { }
