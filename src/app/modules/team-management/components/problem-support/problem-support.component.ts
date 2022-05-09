import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-problem-support',
  templateUrl: './problem-support.component.html',
  styleUrls: ['./problem-support.component.scss']
})
export class ProblemSupportComponent implements OnInit {

  @Input() team?: Team;
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
