import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-control-view',
  templateUrl: './problem-control-view.component.html',
  styleUrls: ['./problem-control-view.component.scss']
})
export class ProblemControlViewComponent implements OnInit {

  @Input() problem?: Problem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
