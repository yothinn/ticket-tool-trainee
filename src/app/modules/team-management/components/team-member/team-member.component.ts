import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() team?: Team;
  @Input() mode: 'edit' | 'view' = 'view';

  @Output() clickAdd = new EventEmitter<any>();
  @Output() clickDel = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
