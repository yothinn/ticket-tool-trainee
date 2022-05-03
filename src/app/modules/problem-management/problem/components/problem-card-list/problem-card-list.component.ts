import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-card-list',
  templateUrl: './problem-card-list.component.html',
  styleUrls: ['./problem-card-list.component.scss']
})
export class ProblemCardListComponent implements OnInit {
  @Input() problems?: Problem[];
  @Output() selected = new EventEmitter<Problem>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.problemDatas)
  }

  onSelect(problem: Problem): void {
    this.selected.emit(problem);
  }
  
}
