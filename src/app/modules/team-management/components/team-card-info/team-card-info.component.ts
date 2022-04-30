import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-card-info',
  templateUrl: './team-card-info.component.html',
  styleUrls: ['./team-card-info.component.scss']
})
export class TeamCardInfoComponent implements OnInit {

  @Input() team?: Team;
  @Input() isActive: boolean = false;
  @Output() selected = new EventEmitter<Team>();

  constructor() { }

  ngOnInit(): void {

  }

  onSelected(): void {
    this.selected.emit(this.team);
  }

}
