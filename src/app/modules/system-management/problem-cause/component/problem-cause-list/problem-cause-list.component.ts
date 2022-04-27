import { Component, Input, OnInit} from '@angular/core';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Component({
  selector: 'app-problem-cause-list',
  templateUrl: './problem-cause-list.component.html',
  styleUrls: ['./problem-cause-list.component.scss']
})
export class ProblemCauseListComponent implements OnInit {

  @Input() problemCauses?: ProblemCause[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.problemCauses);
  }

}
