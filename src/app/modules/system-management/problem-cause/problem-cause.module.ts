import { NgModule } from '@angular/core';
import { ProblemCauseComponent } from './problem-cause/problem-cause.component';
import { ProblemCauseRoutingModule } from './problem-cause-routing.module';
import { ProblemCauseListComponent } from './component/problem-cause-list/problem-cause-list.component';
import { ProblemCauseInfoComponent } from './component/problem-cause-info/problem-cause-info.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ProblemCauseComponent,
    ProblemCauseListComponent,
    ProblemCauseInfoComponent
  ],
  imports: [
    ProblemCauseRoutingModule,
    SharedModule
  ]
})
export class ProblemCauseModule { }
