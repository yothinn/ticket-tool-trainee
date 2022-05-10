import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-contact-info-view',
  templateUrl: './ticket-contact-info-view.component.html',
  styleUrls: ['./ticket-contact-info-view.component.scss']
})
export class TicketContactInfoViewComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ticket)
  }

}
