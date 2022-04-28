import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Component({
  selector: 'app-problem-category-info',
  templateUrl: './problem-category-info.component.html',
  styleUrls: ['./problem-category-info.component.scss']
})
export class ProblemCategoryInfoComponent implements OnInit {

  @Input() problemCategory?: ProblemCategory;

  @Output() edit = new EventEmitter<ProblemCategory>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectEdit(problemCategory: ProblemCategory): void {
    this.edit.emit(problemCategory);
  }
  //เก็บข้อมูลมาไว้ที่ category ใช้ edit ในการเรียกใช้ข้อมูล
}
