import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-team-owner',
  templateUrl: './team-owner.component.html',
  styleUrls: ['./team-owner.component.scss']
})
export class TeamOwnerComponent implements OnInit {

  @Input() problem?: Problem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
