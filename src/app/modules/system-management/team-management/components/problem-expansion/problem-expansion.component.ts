import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-expansion',
  templateUrl: './problem-expansion.component.html',
  styleUrls: ['./problem-expansion.component.scss']
})
export class ProblemExpansionComponent implements OnInit {
  @Input() data:object;

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.data)
  }

}
