import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketChangeDialogComponent } from '../../dialogs/ticket-change-dialog/ticket-change-dialog.component';

@Component({
  selector: 'app-ticket-info-view',
  templateUrl: './ticket-info-view.component.html',
  styleUrls: ['./ticket-info-view.component.scss']
})
export class TicketInfoViewComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
