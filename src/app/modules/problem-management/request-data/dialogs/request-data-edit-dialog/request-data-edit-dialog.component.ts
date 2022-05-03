import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestData } from 'app/core/request-data/request-data.types';

@Component({
  selector: 'app-request-data-edit-dialog',
  templateUrl: './request-data-edit-dialog.component.html',
  styleUrls: ['./request-data-edit-dialog.component.scss']
})
export class RequestDataEditDialogComponent implements OnInit {

  requestData?: RequestData;
  isNew: boolean = true;

  request: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<RequestDataEditDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.requestData = this._data;
    this.isNew = (this.requestData) ? false : true;
    this.request = this.requestData?.keyName;

    console.log(this._data);
  }


  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.request);
  }

}
