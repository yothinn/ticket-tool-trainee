import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-contact-view',
  templateUrl: './team-contact-view.component.html',
  styleUrls: ['./team-contact-view.component.scss']
})
export class TeamContactViewComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
