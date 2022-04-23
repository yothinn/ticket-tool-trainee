import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-category-info',
  templateUrl: './problem-category-info.component.html',
  styleUrls: ['./problem-category-info.component.scss']
})
export class ProblemCategoryInfoComponent implements OnInit {
  @Input() problemCategoryData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
