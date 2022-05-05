import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketAnalyzeDialogComponent } from '../dialogs/ticket-analyze-dialog/ticket-analyze-dialog.component';
import { TicketChangeDialogComponent } from '../dialogs/ticket-change-dialog/ticket-change-dialog.component';


@Component({
  selector: 'app-ticket-information-view',
  templateUrl: './ticket-information-view.component.html',
  styleUrls: ['./ticket-information-view.component.scss']
})
export class TicketInformationViewComponent implements OnInit {

  // @Output() closed = new EventEmitter<any>();

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openTicketAnalyzeDialog(): void {
    const dialogRef = this._dialog.open(TicketAnalyzeDialogComponent, {
      height:'580px',
      width: '60%',
      disableClose: true,
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openTicketAcceptDialog(): void {
    const dialogRef = this._dialog.open(TicketChangeDialogComponent, {
      height:'480px',
      width: '30%',
      disableClose: true
      // data: {},
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
