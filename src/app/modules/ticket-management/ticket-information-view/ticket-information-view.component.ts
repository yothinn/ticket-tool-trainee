import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'app/core/ticket/ticket.service';
import { Ticket } from 'app/core/ticket/ticket.types';
import { Observable } from 'rxjs';
import { TicketAnalyzeDialogComponent } from '../dialogs/ticket-analyze-dialog/ticket-analyze-dialog.component';
import { TicketChangeDialogComponent } from '../dialogs/ticket-change-dialog/ticket-change-dialog.component';


@Component({
  selector: 'app-ticket-information-view',
  templateUrl: './ticket-information-view.component.html',
  styleUrls: ['./ticket-information-view.component.scss']
})
export class TicketInformationViewComponent implements OnInit {

  activeTicket$: Observable<Ticket> = this._ticketService.activeTicket$;

  constructor(
    private _dialog: MatDialog,
    private _ticketService: TicketService,
  ) { }

  ngOnInit(): void {
  }

  openTicketAnalyzeDialog(ticket?: Ticket): void {
    // console.log(ticket)
    const dialogRef = this._dialog.open(TicketAnalyzeDialogComponent, {
      height:'480px',
      width: '55%',
      disableClose: true,
      data: {
        ticket: ticket
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openTicketAcceptDialog(ticket?: Ticket): void {
    const dialogRef = this._dialog.open(TicketChangeDialogComponent, {
      height:'520px',
      width: '35%',
      disableClose: true,
      data: {
        ticket: ticket
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // onClose(): void {
  //   this.closed.emit(undefined);
  // }
}
