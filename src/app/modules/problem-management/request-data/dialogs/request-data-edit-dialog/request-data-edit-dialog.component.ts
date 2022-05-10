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
      valueList: [ '', Validators.required]
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
  removeValue(valueLists: string): void {
    console.log(valueLists)

    const index = this.valueLists.indexOf(valueLists);

    if (index >= 0) {
      this.valueLists.splice(index, 1);
    }
  }

  onChangeValueList(event: any): void{
      if(event.vaule == 'textbox'){
        this.showValueList = false;
      }else if(event.value == 'textarea'){
        this.showValueList = true;
      }else if(event.value == 'AutoComplete list'){
        this.showValueList = true;
      }else if(event.value == 'DropDown List'){
        this.showValueList = false;
      }
    console.log(event); 
  }

  //-----------------------------

  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    const payload: any = this.requestForm?.getRawValue();
    this._dialogRef.close(payload);
    console.log(payload);
  }

}


