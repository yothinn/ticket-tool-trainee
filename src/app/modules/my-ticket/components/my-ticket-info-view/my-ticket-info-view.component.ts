import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-my-ticket-info-view',
  templateUrl: './my-ticket-info-view.component.html',
  styleUrls: ['./my-ticket-info-view.component.scss']
})
export class MyTicketInfoViewComponent implements OnInit {

  @Input() ticket: Ticket[];

  constructor() { }

  ngOnInit(): void {
  }

}
