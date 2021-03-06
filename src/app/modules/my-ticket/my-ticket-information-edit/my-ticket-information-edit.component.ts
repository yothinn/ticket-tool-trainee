import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-my-ticket-information-edit',
  templateUrl: './my-ticket-information-edit.component.html',
  styleUrls: ['./my-ticket-information-edit.component.scss']
})
export class MyTicketInformationEditComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateTicket(info?: Ticket): void {
    console.log(info);
    const isCancel = info ? false : true;

    this.closed.emit(isCancel);
  }

}
