import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-information-view',
  templateUrl: './team-information-view.component.html',
  styleUrls: ['./team-information-view.component.scss']
})
export class TeamInformationViewComponent implements OnInit {

  @Output() closed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    console.log('close');
    this.closed.emit(undefined);
  }

}
