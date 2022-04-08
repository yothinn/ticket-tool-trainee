import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info-view',
  templateUrl: './team-info-view.component.html',
  styleUrls: ['./team-info-view.component.scss']
})
export class TeamInfoViewComponent implements OnInit {
  @Input() infoTest?: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoTest)
  }

}
