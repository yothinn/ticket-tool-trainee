import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-problem-support',
  templateUrl: './problem-support.component.html',
  styleUrls: ['./problem-support.component.scss']
})
export class ProblemSupportComponent implements OnInit {

  @Input() team?: Team;
  @Input() mode: 'edit' | 'view' = 'view';

  @Output() clickAdd = new EventEmitter<any>();
  @Output() clickDel = new EventEmitter<any>();

  data:object []=[
    {text:'Critical',iconName:'circle',color:'#c42a2e',mode:0},
    {text:'Medium',iconName:'circle',color:'#9bb94f',mode:0}
  ]

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
