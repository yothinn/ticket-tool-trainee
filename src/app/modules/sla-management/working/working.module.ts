import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { WorkingDayComponent } from './component/working-day/working-day.component';
import { WorkingWeekComponent } from './component/working-week/working-week.component';
import { WorkingRoutingModule } from './working-routing.module';
import { WorkingComponent } from './working/working.component';



@NgModule({
  declarations: [
    WorkingComponent,
    WorkingWeekComponent,
    WorkingDayComponent

  ],
  imports: [
    SharedModule,
    WorkingRoutingModule

  ]
})
export class WorkingModule { }




