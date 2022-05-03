import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-info-view',
  templateUrl: './problem-info-view.component.html',
  styleUrls: ['./problem-info-view.component.scss']
})
export class ProblemInfoViewComponent implements OnInit {
  @Input() problem?: Problem;
  constructor() { }

  ngOnInit(): void {
    // console.log('มา'+ this.problem)
  }

}
