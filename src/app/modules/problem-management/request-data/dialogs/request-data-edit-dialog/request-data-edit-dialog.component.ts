import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestData } from 'app/core/request-data/request-data.types';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { values } from 'lodash';

@Component({
  selector: 'app-request-data-edit-dialog',
  templateUrl: './request-data-edit-dialog.component.html',
  styleUrls: ['./request-data-edit-dialog.component.scss']
})
export class RequestDataEditDialogComponent implements OnInit {

  requestData?: RequestData;
  // isNew: boolean = true;

  requestForm?: FormGroup;

  request: string = '';

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  requestValue:string[]; 

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<RequestDataEditDialogComponent>,
    private _formBuilder: FormBuilder,
  ) { }

  get isNew(): boolean {
    return (this.requestData) ? false : true;
  }

  ngOnInit(): void {
    this.requestData = this._data;
    // this.isNew = (this.requestData) ? false : true;
    this.request = this.requestData?.keyName;
    this.requestForm = this.initRequestDataForm(this._data);

    console.log(this._data);

  }

  initRequestDataForm(request:RequestData): FormGroup {
    return this._formBuilder.group({
      keyName: [request?.keyName || '', Validators.required],
      displayName: [request?.displayName || '', Validators.required],
      controlType: [request?.controlType, Validators.required],

    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.requestValue.push(value);
    }

    event.chipInput!.clear();
  }

  remove(requestValue: string): void {
    const index = this.requestValue.indexOf(requestValue);

    if (index >= 0) {
      this.requestValue.splice(index, 1);
    }
  }

  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.request);
  }

}


