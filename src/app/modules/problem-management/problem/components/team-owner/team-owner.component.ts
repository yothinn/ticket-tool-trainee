import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-team-owner',
  templateUrl: './team-owner.component.html',
  styleUrls: ['./team-owner.component.scss']
})
export class TeamOwnerComponent implements OnInit {

  @Input() problem?: Problem;
  @Input() mode: 'create' | 'edit' | 'view' = 'view';

  @Output() clickAdd = new EventEmitter<any>();
  @Output() clickDel = new EventEmitter<any>();

  constructor() { }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  get isViewMode(): boolean {
    return this.mode === 'view';
  }

  get isCreateMode(): boolean {
    return this.mode === 'create';
  }

  ngOnInit(): void {
  }

}
