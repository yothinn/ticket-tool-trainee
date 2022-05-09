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

  showValueList: boolean = false;

  addValue = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  valueLists: string[] = [];

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

  initRequestDataForm(request: RequestData): FormGroup {
    return this._formBuilder.group({
      keyName: [request?.keyName || '', Validators.required],
      displayName: [request?.displayName || '', Validators.required],
      controlType: [request?.controlType, Validators.required],

    });
  }
  //------------ valueList -----------------

  addValueList(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.valueLists.push(value);
    }

    event.chipInput!.clear();
  }

  removeValue(valueList: string): void {
    const index = this.valueLists.indexOf(valueList);

    if (index >= 0) {
      this.valueLists.splice(index, 1);
    }
  }

  onChange(event: any): void{
    console.log(event);
    this.showValueList = event.value;
    // if(this.showValueList == true){
    //   this.showValueList = false;
    // }else{
    //   this.showValueList = true;
    // }
  }

  //-----------------------------

  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.initRequestDataForm);
  }

}


