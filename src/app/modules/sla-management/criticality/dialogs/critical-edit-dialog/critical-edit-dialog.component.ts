import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-critical-edit-dialog',
  templateUrl: './critical-edit-dialog.component.html',
  styleUrls: ['./critical-edit-dialog.component.scss']
})
export class CriticalEditDialogComponent implements OnInit {

  criticalityForm: FormGroup;

  constructor(

    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<CriticalEditDialogComponent>,
  ) {}

  

  ngOnInit(): void {
  }

  close(): void {
    this._dialogRef.close(undefined);
  };

  save(): void {
    // const playload = this.holidayForm.getRawValue();
    // console.log(playload);
    // this._dialogRef.close(playload);
  }
}
