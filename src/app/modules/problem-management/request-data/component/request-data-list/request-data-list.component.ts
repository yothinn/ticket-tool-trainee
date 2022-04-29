import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestData } from 'app/core/request-data/request-data.types';

@Component({
  selector: 'app-request-data-list',
  templateUrl: './request-data-list.component.html',
  styleUrls: ['./request-data-list.component.scss']
})
export class RequestDataListComponent implements OnInit {

  @Input() requestDatas?: RequestData[];

  @Output() edit = new EventEmitter<any>();

  @Output() selected = new EventEmitter<RequestData>();

  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.requestDatas);

    this.dateMock = [
      {
        keyName: 'ticketNo',
        displayName: 'Ticket No',
        controlType: 'textbox'
      },
      {
        keyName: 'ticketNo',
        displayName: 'Ticket No',
        controlType: 'textbox'
      },
    ]
  }


  onSelectEdit(request: RequestData, index: number): void {
    this.edit.emit({
      index: index,
      requestData: request,
    });
  }

  onDetail(item: RequestData): void {
    console.log(item);
    this.selected.emit(item);
  }

}
