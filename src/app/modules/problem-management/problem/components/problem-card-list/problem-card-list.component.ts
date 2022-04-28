import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-card-list',
  templateUrl: './problem-card-list.component.html',
  styleUrls: ['./problem-card-list.component.scss']
})
export class ProblemCardListComponent implements OnInit {
  @Input() problemDatas?: Problem[];
  @Output() selectProblemItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.problemDatas)
    
  }

  onDetail(item: any): void {
    console.log(item);
    this.selectProblemItem.emit(item);
  }
  
}
