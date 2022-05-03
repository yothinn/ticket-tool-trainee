import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';
import { ProblemStatus } from 'app/core/problem/problemStatus.enum';

@Component({
  selector: 'app-problem-card-info',
  templateUrl: './problem-card-info.component.html',
  styleUrls: ['./problem-card-info.component.scss']
})
export class ProblemCardInfoComponent implements OnInit {

  @Input() problem?: Problem;
  problemStatus = ProblemStatus;

  constructor() { }

  ngOnInit(): void {

  }



}
