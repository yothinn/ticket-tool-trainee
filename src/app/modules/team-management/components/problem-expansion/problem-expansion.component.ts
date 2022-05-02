import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-expansion',
  templateUrl: './problem-expansion.component.html',
  styleUrls: ['./problem-expansion.component.scss']
})
export class ProblemExpansionComponent implements OnInit {

  @Input() problem: Problem;

  constructor() { }

  ngOnInit(): void {

  }

}
