import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestData } from 'app/core/request-data/request-data.types';

@Component({
  selector: 'app-request-data-info',
  templateUrl: './request-data-info.component.html',
  styleUrls: ['./request-data-info.component.scss']
})
export class RequestDataInfoComponent implements OnInit {

  @Input() requestData: RequestData;

  @Output() edit = new EventEmitter<RequestData>();

  @Input() mode: 'edit' | 'view' = 'view';


  constructor() { }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  get isViewMode(): boolean {
    return this.mode === 'view';
  }

  ngOnInit(): void {
  }

  onSelectEdit(requestData: RequestData): void {
    this.edit.emit(requestData);
  }

}
