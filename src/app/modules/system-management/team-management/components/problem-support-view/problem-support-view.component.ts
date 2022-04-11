import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-support-view',
  templateUrl: './problem-support-view.component.html',
  styleUrls: ['./problem-support-view.component.scss']
})
export class ProblemSupportViewComponent implements OnInit {

  data:object []=[
    {text:'Critical',iconName:'circle',color:'#c42a2e',mode:0},
    {text:'Medium',iconName:'circle',color:'#9bb94f',mode:0}
  ]

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
