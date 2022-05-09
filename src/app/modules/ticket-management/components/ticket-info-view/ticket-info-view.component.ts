import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'app/core/ticket/ticket.types';
import { TicketChangeDialogComponent } from '../../dialogs/ticket-change-dialog/ticket-change-dialog.component';

@Component({
  selector: 'app-ticket-info-view',
  templateUrl: './ticket-info-view.component.html',
  styleUrls: ['./ticket-info-view.component.scss']
})
export class TicketInfoViewComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
