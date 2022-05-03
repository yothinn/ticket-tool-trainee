import { NgModule } from '@angular/core';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayListComponent } from './component/holiday-list/holiday-list.component';
import { HolidayInfoComponent } from './component/holiday-info/holiday-info.component';
import { HolidayEditDialogComponent } from './dialogs/holiday-edit-dialog/holiday-edit-dialog.component';
import { HolidayRoutingModule } from './holiday-routing.module';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    HolidayComponent,
    HolidayListComponent,
    HolidayInfoComponent,
    HolidayEditDialogComponent
  ],
  imports: [
    HolidayRoutingModule,
    SharedModule

  ]
})
export class HolidayModule { }
