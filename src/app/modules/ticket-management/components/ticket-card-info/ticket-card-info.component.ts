import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-card-info',
  templateUrl: './ticket-card-info.component.html',
  styleUrls: ['./ticket-card-info.component.scss']
})
export class TicketCardInfoComponent implements OnInit {

  @Input() ticket?: Ticket;
  @Input() actived: boolean = false;

  @Output() selected = new EventEmitter<Ticket>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(): void {
    this.selected.emit(this.ticket);
  }

}
