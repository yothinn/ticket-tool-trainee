import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-support-view',
  templateUrl: './problem-support-view.component.html',
  styleUrls: ['./problem-support-view.component.scss']
})
export class ProblemSupportViewComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
