import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-holiday-edit-dialog',
  templateUrl: './holiday-edit-dialog.component.html',
  styleUrls: ['./holiday-edit-dialog.component.scss']
})
export class HolidayEditDialogComponent implements OnInit {

  @Input() holiday: Holiday;
  
  holidayForm: FormGroup;
  isValid: boolean = true;
  

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<HolidayEditDialogComponent>,
    private _formBuilder: FormBuilder
    ) {}

  get isNew(): boolean {
    return (this.holiday) ? false : true;
  }
  
  ngOnInit(): void {
    this.holiday = this._data;
    this.holidayForm = this.initHolidayForm(this.holiday);
    
    console.log(this._data);
  }


  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    const playload = this.holidayForm.getRawValue();
    console.log(playload);
    this._dialogRef.close(playload);
  }

  initHolidayForm(holiday?: Holiday): FormGroup {
    return this._formBuilder.group({
      isWholeDay: [holiday?.isWholeDay || true, Validators.required],
      name: [holiday?.name || '', Validators.required],
      date: [holiday?.date || '', Validators.required],
      startTime: [holiday?.startTime || '', ],
      endTime: [holiday?.endTime || '', ] 
    });
  }

  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}