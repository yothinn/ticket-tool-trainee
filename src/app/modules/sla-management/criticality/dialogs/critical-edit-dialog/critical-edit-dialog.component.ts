import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Criticality } from 'app/core/criticality/criticality.types';

@Component({
  selector: 'app-critical-edit-dialog',
  templateUrl: './critical-edit-dialog.component.html',
  styleUrls: ['./critical-edit-dialog.component.scss']
})
export class CriticalEditDialogComponent implements OnInit {

  @Input() criticality: Criticality;

  criticalDialogForm: FormGroup;
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<CriticalEditDialogComponent>,
    private _formBuilder: FormBuilder
  ) {}

  get isNew(): boolean {
    return (this.criticality) ? false : true;
  }

  ngOnInit(): void {
    this.criticality = this._data?.criticality;
    this.criticalDialogForm = this.initCriticalDialogForm(this.criticality);
  }
  
  // ngOnChanges(): void {
  //   this.criticalDialogForm = this.initCriticalDialogForm(this.criticality);
  // }

  close(): void {
    this._dialogRef.close(undefined);
  };

  save(): void {
    const payload = this.criticalDialogForm.getRawValue();
    console.log(payload);
    this._dialogRef.close(payload);
  }

  initCriticalDialogForm(critical?: Criticality): FormGroup {
    return this._formBuilder.group({
      name: [critical?.name || '', Validators.required],
      color: [critical?.color || '', Validators.required],
      total: [critical?.totalPeriod || '', ],
      acknow: [critical?.acknowledgeTime || '', ],
      process: [critical?.processTime || '', ]
    })
  };

   
}
