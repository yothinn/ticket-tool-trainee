import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Component({
  selector: 'app-problem-category-list',
  templateUrl: './problem-category-list.component.html',
  styleUrls: ['./problem-category-list.component.scss']
})
export class ProblemCategoryListComponent implements OnInit {

  @Input() problemCategories?: ProblemCategory[];

  @Output() edit = new EventEmitter<any>();
  @Output() del = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

    console.log(this.problemCategories);
  }

}
