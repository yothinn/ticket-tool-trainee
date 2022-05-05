import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemRoutingModule } from './problem-routing.module';
import { ProblemComponent } from './problem/problem.component';
import { ProblemInformationEditComponent } from './problem-information-edit/problem-information-edit.component';
import { ProblemInformationViewComponent } from './problem-information-view/problem-information-view.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProblemCardInfoComponent } from './components/problem-card-info/problem-card-info.component';
import { ProblemCardListComponent } from './components/problem-card-list/problem-card-list.component';
import { ProblemControlViewComponent } from './components/problem-control-view/problem-control-view.component';
import { ProblemControlEditComponent } from './components/problem-control-edit/problem-control-edit.component';
import { ProblemInfoEditComponent } from './components/problem-info-edit/problem-info-edit.component';
import { ProblemInfoViewComponent } from './components/problem-info-view/problem-info-view.component';
import { TeamOwnerComponent} from './components/team-owner/team-owner.component';
import { TeamOwnerDialogComponent } from './dialogs/team-owner-dialog/team-owner-dialog.component';
import { RequestDataMenuComponent } from './components/request-data-menu/request-data-menu.component';
import { RequestDataComponent } from './components/request-data/request-data.component';



@NgModule({
  declarations: [
    ProblemComponent,
    ProblemInformationEditComponent,
    ProblemInformationViewComponent,
    ProblemCardInfoComponent,
    ProblemCardListComponent,
    ProblemControlViewComponent,
    ProblemControlEditComponent,
    ProblemInfoEditComponent,
    ProblemInfoViewComponent,
    TeamOwnerDialogComponent,
    RequestDataMenuComponent,
    RequestDataComponent,
    TeamOwnerComponent
  ],
  imports: [
    CommonModule,
    ProblemRoutingModule,
    SharedModule
  ]
})
export class ProblemModule { }
