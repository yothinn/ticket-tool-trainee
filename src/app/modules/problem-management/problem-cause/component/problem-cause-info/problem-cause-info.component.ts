import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';
@Component({
    selector: 'app-problem-cause-info',
    templateUrl: './problem-cause-info.component.html',
    styleUrls: ['./problem-cause-info.component.scss']
})
export class ProblemCauseInfoComponent implements OnInit {

  @Input() problemCause: ProblemCause;

  @Output() edit = new EventEmitter<ProblemCause>();
  @Output() del = new EventEmitter<ProblemCause>();

  constructor() { }

  ngOnInit(): void {
  }
}
