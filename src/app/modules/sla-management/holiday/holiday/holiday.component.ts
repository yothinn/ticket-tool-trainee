import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { HolidayService } from 'app/core/holiday/holiday.service';
import { Holiday } from 'app/core/holiday/holiday.types';
import { GetHolidayParameter } from 'app/core/parameters/getHolidayParameter.entity';
import { Observable } from 'rxjs';
import { HolidayEditDialogComponent } from '../dialogs/holiday-edit-dialog/holiday-edit-dialog.component';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  holidayResponse$?: Observable<PageResponse<Holiday[]>>;

  holidays: any[] = [
    {value: 'master-0', viewValue: 'Master1'},
    {value: 'master-1', viewValue: 'Master2'},
    {value: 'master-2', viewValue: 'Master3'},
  ];

  constructor(
    private _dialog: MatDialog,
    private _holidayService: HolidayService
  ) {
    this.getHoliday()
  }

  ngOnInit(): void {
  }

  openHolidayDialog(data?: {index: number; holidays: Holiday}): void {
    console.log(data);

    const dialogRef = this._dialog.open(HolidayEditDialogComponent, {
      height:'420px',
      width: '40%',
      disableClose: true,
      data: data?.holidays
    });

    dialogRef.afterClosed().subscribe((holidayName: string) => {
      console.log('The dialog was closed');
      if (holidayName) {
        // Save to backend
      }
    });
  }

  getHoliday(): void {
    const params = new GetHolidayParameter();

    this.holidayResponse$ = this._holidayService.getSlaHoliday(params);
  }

  onDeleteHoliday(data: {holiday: Holiday}): void {
    console.log(data);
  }

  
}
