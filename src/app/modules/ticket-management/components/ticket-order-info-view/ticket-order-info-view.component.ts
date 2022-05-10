import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-order-info-view',
  templateUrl: './ticket-order-info-view.component.html',
  styleUrls: ['./ticket-order-info-view.component.scss']
})
export class TicketOrderInfoViewComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ticket)
  }

}
