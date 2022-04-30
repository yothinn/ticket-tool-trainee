import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-info-view',
  templateUrl: './team-info-view.component.html',
  styleUrls: ['./team-info-view.component.scss']
})
export class TeamInfoViewComponent implements OnInit {
  @Input() team?: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
