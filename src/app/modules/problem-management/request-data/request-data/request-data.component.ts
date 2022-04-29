import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetRequestDataParameter } from 'app/core/parameters/getRequestDataParameter.entity';
import { RequestDataService } from 'app/core/request-data/request-data.service';
import { RequestData } from 'app/core/request-data/request-data.types';
import { Observable } from 'rxjs';
import { RequestDataEditDialogComponent } from '../dialogs/request-data-edit-dialog/request-data-edit-dialog.component';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  requestDataResponse$?: Observable<PageResponse< RequestData[]>>;

  constructor(
    private _dialog: MatDialog,
    private _requestDataService:  RequestDataService
  ) { 
    this.getRequestData();
  }

  ngOnInit(): void {
  }

  openRequestDataDialog(data?: {index: number; requestData: RequestData}): void {
    console.log(data);

    const dialogRef = this._dialog.open(RequestDataEditDialogComponent, {
      height:'230px',
      width: '40%',
      data: data?.requestData
    });

    dialogRef.afterClosed().subscribe((requesty: string) => {
      console.log('The dialog was closed');
      if (requesty) {
        // Save to backend
      }
    });
  }

  getRequestData(): void {
    const params = new GetRequestDataParameter();

    this.requestDataResponse$ = this._requestDataService.getRequestData(params);
  }

  onEdit(event: any ): void {
    console.log(event);
  }

}
