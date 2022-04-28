import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-card-info',
  templateUrl: './team-card-info.component.html',
  styleUrls: ['./team-card-info.component.scss']
})
export class TeamCardInfoComponent implements OnInit {

  @Input() teamData?: any;

  constructor() { }

  ngOnInit(): void {

  }

}
