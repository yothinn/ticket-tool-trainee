import { NgModule } from '@angular/core';
import { SlaHolidayComponent } from './sla-holiday/sla-holiday.component';
import { SlaHolidayEditDialogsComponent } from './dialogs/sla-holiday-edit-dialogs/sla-holiday-edit-dialogs.component';
import { SlaHolidayListComponent } from './components/sla-holiday-list/sla-holiday-list.component';
import { SlaHolidayInfoComponent } from './components/sla-holiday-info/sla-holiday-info.component';
import { SlaHolidayRoutingModule } from './sla-holiday-routing.module';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    SlaHolidayComponent,
    SlaHolidayEditDialogsComponent,
    SlaHolidayListComponent,
    SlaHolidayInfoComponent
  ],
  imports: [
    SlaHolidayRoutingModule,
    SharedModule
  ]
})
export class SlaHolidayModule { }
