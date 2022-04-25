import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-cause-info',
  templateUrl: './problem-cause-info.component.html',
  styleUrls: ['./problem-cause-info.component.scss']
})
export class ProblemCauseInfoComponent implements OnInit {
  @Input() problemCauseData?: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
