import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketChangeDialogComponent } from '../../dialogs/ticket-change-dialog/ticket-change-dialog.component';

@Component({
  selector: 'app-ticket-info-view',
  templateUrl: './ticket-info-view.component.html',
  styleUrls: ['./ticket-info-view.component.scss']
})
export class TicketInfoViewComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openTicketChangeDialog(): void {
    const dialogRef = this.dialog.open(TicketChangeDialogComponent, {
      height:'480px',
      width: '30%'
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
