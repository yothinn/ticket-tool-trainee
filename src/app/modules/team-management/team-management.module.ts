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
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { ProblemSupportComponent } from './components/problem-support/problem-support.component';
import { TeamMemberDialogComponent } from './dialogs/team-member-dialog/team-member-dialog.component';
import { ProblemDialogComponent } from './dialogs/problem-dialog/problem-dialog.component';
import { ProblemExpansionComponent } from './components/problem-expansion/problem-expansion.component';
import { TeamCardListComponent } from './components/team-card-list/team-card-list.component';


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
    TeamMemberComponent,
    ProblemSupportComponent,
    TeamMemberDialogComponent,
    ProblemDialogComponent,
    ProblemExpansionComponent,
    TeamCardListComponent
  ],
  imports: [
    TeamManagementRoutingModule,
    SharedModule
  ]
})
export class TeamManagementModule { }
