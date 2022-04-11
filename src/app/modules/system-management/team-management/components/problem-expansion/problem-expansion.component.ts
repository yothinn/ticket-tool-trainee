import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-expansion',
  templateUrl: './problem-expansion.component.html',
  styleUrls: ['./problem-expansion.component.scss']
})
export class ProblemExpansionComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  data:any []=[
    {text:'Critical',iconName:'circle',color:'#c42a2e',mode:0},
    {text:'Medium',iconName:'',color:'',mode:0}
  ]

  
  ngOnInit(): void {
    
  }

}
