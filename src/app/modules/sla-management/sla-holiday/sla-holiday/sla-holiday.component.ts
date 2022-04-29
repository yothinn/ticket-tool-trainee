import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { HolidayService } from 'app/core/holiday/holiday.service';
import { Holiday } from 'app/core/holiday/holiday.types';
import { GetHolidayParameter } from 'app/core/parameters/getHolidayParameter.entity';
import { Observable } from 'rxjs';
import { SlaHolidayEditDialogsComponent } from '../dialogs/sla-holiday-edit-dialogs/sla-holiday-edit-dialogs.component';

@Component({
  selector: 'app-sla-holiday',
  templateUrl: './sla-holiday.component.html',
  styleUrls: ['./sla-holiday.component.scss']
})
export class SlaHolidayComponent implements OnInit {

  holidayResponse$: Observable<PageResponse<Holiday[]>>;

  constructor(

    private _dialog: MatDialog,
    private _holidayService: HolidayService
  ) {
    this.getSlaHoliday
   }
  
  ngOnInit(): void {
  }

  openHolidayDialog(data?: {index: number; holiday: Holiday}): void {
    console.log(data);

    const dialogRef = this._dialog.open(SlaHolidayEditDialogsComponent, {
      height:'230px',
      width: '40%',
      data: data?.holiday
    });

    dialogRef.afterClosed().subscribe((causeName: string) => {
      console.log('The dialog was closed');
      // if (holidayName) {
      //   // Save to backend
      // }
    });
  }

  getSlaHoliday(): void {
    const params = new GetHolidayParameter();

    this.holidayResponse$ = this._holidayService.getSlaHoliday(params);
  }
    
}
