import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Holiday } from 'app/core/holiday/holiday.types';
import { values } from 'lodash';

@Component({
  selector: 'app-holiday-edit-dialog',
  templateUrl: './holiday-edit-dialog.component.html',
  styleUrls: ['./holiday-edit-dialog.component.scss']
})
export class HolidayEditDialogComponent implements OnInit {

  @Input() holiday: Holiday;
  
  holidayName: string = '';
  dialogForm: FormGroup;
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
    this.holidayName = this.holiday?.name;
    this.dialogForm = this.initDialogForm(this._data)
    
    console.log(this._data);
  }


  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.holiday);
  }

  initDialogForm(holiday?: Holiday): FormGroup {
    return this._formBuilder.group({
      holidayName: [holiday?.name || '', Validators.required],
      date: [holiday?.date || '', Validators.required],
      start: [holiday?.startTime || '', Validators.required],
      end: [holiday?.endTime || '', Validators.required]
      
    });
  }

  onChangeStatus(event: any ): void {
    console.log(event);
  }

  changeValue(valid: boolean) {
    this.isValid = valid
  }
}