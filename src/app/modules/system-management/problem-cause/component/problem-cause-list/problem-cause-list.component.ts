import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-cause-list',
  templateUrl: './problem-cause-list.component.html',
  styleUrls: ['./problem-cause-list.component.scss']
})
export class ProblemCauseListComponent implements OnInit {
  @Output() selectProblem = new EventEmitter<any>();
  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    this.dateMock = [
      {
        problemNo: 'PB0000001',
        problemCategory: 'Cause 1'
      },
      {
        problemNo: 'PB0000002',
        problemCategory: 'Cause 2'
      },
      {
        problemNo: 'PB0000003',
        problemCategory: 'Cause 3'
      },
      {
        problemNo: 'PB0000004',
        problemCategory: 'Cause 4'
      },
      {
        problemNo: 'PB0000005',
        problemCategory: 'Cause 5'
      },
      {
        problemNo: 'PB0000006',
        problemCategory: 'Cause 6'
      },
      {
        problemNo: 'PB0000007',
        problemCategory: 'Cause7'
      },
      {
        problemNo: 'PB0000008',
        problemCategory: 'Cause 8'
      },
      {
        problemNo: 'PB0000009',
        problemCategory: 'Cause 9'
      },
      {
        problemNo: 'PB0000010',
        problemCategory: 'Cause 10'
      },
      {
        problemNo: 'PB0000011',
        problemCategory: 'Cause 11'
      },
      {
        problemNo: 'PB0000012',
        problemCategory: 'Cause 12'
      },
      {
        problemNo: 'PB0000013',
        problemCategory: 'Cause 13'
      },
      {
        problemNo: 'PB0000014',
        problemCategory: 'Cause 14'
      },
      {
        problemNo: 'PB0000015',
        problemCategory: 'Cause 15'
      },
      {
        problemNo: 'PB0000016',
        problemCategory: 'Cause 16'
      },
      {
        problemNo: 'PB0000017',
        problemCategory: 'Cause 17'
      },
      {
        problemNo: 'PB0000018',
        problemCategory: 'Cause 18'
      },
      {
        problemNo: 'PB0000019',
        problemCategory: 'Cause 19'
      },
      {
        problemNo: 'PB0000020',
        problemCategory: 'Cause 20'
      },

    ]
  }
  onDetail(item: any): void {
    console.log(item);
    this.selectProblem.emit(item);
  }

}