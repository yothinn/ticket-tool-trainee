import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-card-list',
  templateUrl: './team-card-list.component.html',
  styleUrls: ['./team-card-list.component.scss']
})
export class TeamCardListComponent implements OnInit, OnChanges {

  @Input() teams?: Team[];
  @Input() activeTeam?: Team;

  @Output() selected = new EventEmitter<Team>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.teams);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.activeTeam);
  }

  onSelected(team: Team): void {
    this.activeTeam = team;

    this.selected.emit(team);
  }

}
