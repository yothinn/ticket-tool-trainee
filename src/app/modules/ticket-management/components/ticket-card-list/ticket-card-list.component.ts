import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-card-list',
  templateUrl: './ticket-card-list.component.html',
  styleUrls: ['./ticket-card-list.component.scss']
})
export class TicketCardListComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() activeTicket?: Ticket;

  @Output() selected = new EventEmitter<Ticket>();

  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tickets)
  }

  onSelected(ticket: Ticket): void {
    this.activeTicket = ticket;
    this.selected.emit(ticket);
  }

}
