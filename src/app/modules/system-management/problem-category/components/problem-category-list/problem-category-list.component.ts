import { Component, Input, OnInit } from '@angular/core';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Component({
  selector: 'app-problem-category-list',
  templateUrl: './problem-category-list.component.html',
  styleUrls: ['./problem-category-list.component.scss']
})
export class ProblemCategoryListComponent implements OnInit {

  @Input() problemCategories?: ProblemCategory[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.problemCategories);
  }

}
