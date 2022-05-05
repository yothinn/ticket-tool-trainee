import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestData } from 'app/core/request-data/request-data.types';

@Component({
  selector: 'app-request-data-list',
  templateUrl: './request-data-list.component.html',
  styleUrls: ['./request-data-list.component.scss']
})
export class RequestDataListComponent implements OnInit {

  @Input() requestData?: RequestData[];

  @Output() edit = new EventEmitter<any>();

  @Output() del = new EventEmitter<any>();

  @Output() selected = new EventEmitter<RequestData>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.requestData);
  }

  // onSelectEdit(request: RequestData): void {
  //   this.edit.emit({
  //     requestData: request
  //   });
  // }

}
