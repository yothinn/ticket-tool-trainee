import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  @Input() problem?: Problem;
  @Input() mode: 'edit' | 'view' = 'view';

  @Output() clickAdd = new EventEmitter<any>();
  @Output() clickDel = new EventEmitter<any>();

  constructor() { }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  get isViewMode(): boolean {
    return this.mode === 'view';
  }

  ngOnInit(): void {
  }

}
