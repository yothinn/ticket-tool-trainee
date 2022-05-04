import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'app/core/team/team.types';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-my-ticket-card-info',
  templateUrl: './my-ticket-card-info.component.html',
  styleUrls: ['./my-ticket-card-info.component.scss']
})
export class MyTicketCardInfoComponent implements OnInit {

  @Input() ticket?: Ticket;
  @Input() actived: boolean = false;

  @Output() selected = new EventEmitter<Ticket>();

  @Input() myTicketData?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(): void {
    this.selected.emit(this.ticket);
  }

}
