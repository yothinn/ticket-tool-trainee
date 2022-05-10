import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-my-ticket-card-list',
  templateUrl: './my-ticket-card-list.component.html',
  styleUrls: ['./my-ticket-card-list.component.scss']
})
export class MyTicketCardListComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() activeTicket?: Ticket;

  @Output() selected = new EventEmitter<Ticket>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tickets)
    
  }

  onSelected(ticket: Ticket): void {
    this.activeTicket = ticket;

    this.selected.emit(ticket);
  }
}
