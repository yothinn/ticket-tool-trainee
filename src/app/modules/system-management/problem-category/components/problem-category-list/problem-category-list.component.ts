import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-category-list',
  templateUrl: './problem-category-list.component.html',
  styleUrls: ['./problem-category-list.component.scss']
})
export class ProblemCategoryListComponent implements OnInit {
  @Output() selectProblem = new EventEmitter<any>();
  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    this.dateMock = [
      {
        problemNo: 'PB0000001',
        problemCategory: 'Category Name 1'
      },
      {
        problemNo: 'PB0000002',
        problemCategory: 'Category Name 2'
      },
      {
        problemNo: 'PB0000003',
        problemCategory: 'Category Name 3'
      },
      {
        problemNo: 'PB0000004',
        problemCategory: 'Category Name 4'
      },
      {
        problemNo: 'PB0000005',
        problemCategory: 'Category Name 5'
      },
      {
        problemNo: 'PB0000006',
        problemCategory: 'Category Name 6'
      },
      {
        problemNo: 'PB0000007',
        problemCategory: 'Category Name 7'
      },
      {
        problemNo: 'PB0000008',
        problemCategory: 'Category Name 8'
      },
      {
        problemNo: 'PB0000009',
        problemCategory: 'Category Name 9'
      },
      {
        problemNo: 'PB0000010',
        problemCategory: 'Category Name 10'
      },
      {
        problemNo: 'PB0000011',
        problemCategory: 'Category Name 11'
      },
      {
        problemNo: 'PB0000012',
        problemCategory: 'Category Name 12'
      },
      {
        problemNo: 'PB0000013',
        problemCategory: 'Category Name 13'
      },
      {
        problemNo: 'PB0000014',
        problemCategory: 'Category Name 14'
      },
      {
        problemNo: 'PB0000015',
        problemCategory: 'Category Name 15'
      },
      {
        problemNo: 'PB0000016',
        problemCategory: 'Category Name 16'
      },
      {
        problemNo: 'PB0000017',
        problemCategory: 'Category Name 17'
      },
      {
        problemNo: 'PB0000018',
        problemCategory: 'Category Name 18'
      },
      {
        problemNo: 'PB0000019',
        problemCategory: 'Category Name 19'
      },
      {
        problemNo: 'PB0000020',
        problemCategory: 'Category Name 20'
      },

    ]
  }
  onDetail(item: any): void {
    console.log(item);
    this.selectProblem.emit(item);
  }

}
