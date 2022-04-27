import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketAnalyzeDialogComponent } from '../dialogs/ticket-analyze-dialog/ticket-analyze-dialog.component';


@Component({
  selector: 'app-ticket-information-view',
  templateUrl: './ticket-information-view.component.html',
  styleUrls: ['./ticket-information-view.component.scss']
})
export class TicketInformationViewComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

    openTicketDialog(): void {
      const dialogRef = this.dialog.open(TicketAnalyzeDialogComponent, {
        height:'580px',
        width: '60%'
        // data: {},
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
}
