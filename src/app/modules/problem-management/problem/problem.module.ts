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
import { RequestDataEditComponent } from './components/request-data-edit/request-data-edit.component';
import { RequestDataViewComponent } from './components/request-data-view/request-data-view.component';
import { TeamOwnerViewComponent } from './components/team-owner-view/team-owner-view.component';
import { TeamOwnerEditComponent } from './components/team-owner-edit/team-owner-edit.component';
import { RequestDataDialogComponent } from './dialogs/request-data-dialog/request-data-dialog.component';
import { TeamOwnerDialogComponent } from './dialogs/team-owner-dialog/team-owner-dialog.component';
import { RequestDataMenuComponent } from './components/request-data-menu/request-data-menu.component';



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
    RequestDataEditComponent,
    RequestDataViewComponent,
    TeamOwnerViewComponent,
    TeamOwnerEditComponent,
    RequestDataDialogComponent,
    TeamOwnerDialogComponent,
    RequestDataMenuComponent
  ],
  imports: [
    CommonModule,
    ProblemRoutingModule,
    SharedModule
  ]
})
export class ProblemModule { }
