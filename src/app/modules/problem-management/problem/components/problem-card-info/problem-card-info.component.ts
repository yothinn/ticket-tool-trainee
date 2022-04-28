import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-card-info',
  templateUrl: './problem-card-info.component.html',
  styleUrls: ['./problem-card-info.component.scss']
})
export class ProblemCardInfoComponent implements OnInit {

  @Input() problemData?: Problem;

  constructor() { }

  ngOnInit(): void {

  }



}
