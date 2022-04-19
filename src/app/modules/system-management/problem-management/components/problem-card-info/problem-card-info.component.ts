import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-card-info',
  templateUrl: './problem-card-info.component.html',
  styleUrls: ['./problem-card-info.component.scss']
})
export class ProblemCardInfoComponent implements OnInit {

  @Input() problemData?: any;

  constructor() { }

  ngOnInit(): void {

  }



}
