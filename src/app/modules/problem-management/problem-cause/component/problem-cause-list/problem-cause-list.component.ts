import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Component({
  selector: 'app-problem-cause-list',
  templateUrl: './problem-cause-list.component.html',
  styleUrls: ['./problem-cause-list.component.scss']
})
export class ProblemCauseListComponent implements OnInit {

  @Input() problemCauses?: ProblemCause[];

  @Output() edit = new EventEmitter<any>();
  @Output() del = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit(): void {

    console.log(this.problemCauses);
  }

}
