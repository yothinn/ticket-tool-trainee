import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-ticket-information-view',
  templateUrl: './my-ticket-information-view.component.html',
  styleUrls: ['./my-ticket-information-view.component.scss']
})
export class MyTicketInformationViewComponent implements OnInit {

  @Output() closed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit(undefined);
  }

}
