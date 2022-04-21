import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-analyze-dialog',
  templateUrl: './ticket-analyze-dialog.component.html',
  styleUrls: ['./ticket-analyze-dialog.component.scss']
})
export class TicketAnalyzeDialogComponent implements OnInit {

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  constructor(
    public dialogRef: MatDialogRef<TicketAnalyzeDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}

