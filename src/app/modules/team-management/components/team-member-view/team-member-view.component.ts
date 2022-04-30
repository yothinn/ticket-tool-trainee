import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-member-view',
  templateUrl: './team-member-view.component.html',
  styleUrls: ['./team-member-view.component.scss']
})
export class TeamMemberViewComponent implements OnInit {
  @Input() team?: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
