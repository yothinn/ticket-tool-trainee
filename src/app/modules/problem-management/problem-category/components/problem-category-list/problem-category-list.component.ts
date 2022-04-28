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

  constructor() { }

  ngOnInit(): void {

    console.log(this.problemCategories);
  }

  onSelectEdit(category: ProblemCategory, index: number): void {
    this.edit.emit({
      index: index,
      problemCategory: category
    });
  }
  // เก็บข้อมูลทั้ง index และ ข้อมูลcategory
}
