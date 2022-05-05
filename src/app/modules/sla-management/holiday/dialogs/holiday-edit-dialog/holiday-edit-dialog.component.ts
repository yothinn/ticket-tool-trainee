import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-holiday-edit-dialog',
  templateUrl: './holiday-edit-dialog.component.html',
  styleUrls: ['./holiday-edit-dialog.component.scss']
})
export class HolidayEditDialogComponent implements OnInit {

  holiday?: Holiday;
  isNew: boolean = true;
  
  holidayName: string = '';
  controlForm: FormGroup;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<HolidayEditDialogComponent>,
  ) { }
  
  ngOnInit(): void {
    this.holiday = this._data;
    this.isNew = (this.holiday) ? false : true;
    this.holidayName = this.holiday?.name;

    console.log(this._data);
  }

  // get isNew(): boolean {
  //   return (this.holiday) ? false : true;
  // }

  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.holiday);
  }
}