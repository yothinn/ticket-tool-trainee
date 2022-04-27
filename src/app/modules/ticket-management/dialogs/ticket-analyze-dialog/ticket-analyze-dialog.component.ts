import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-analyze-dialog',
  templateUrl: './ticket-analyze-dialog.component.html',
  styleUrls: ['./ticket-analyze-dialog.component.scss']
})
export class TicketAnalyzeDialogComponent implements OnInit {

  problems: any[] = [
    {value: 'problem-0', viewValue: 'problem1'},
    {value: 'problem-1', viewValue: 'problem2'},
    {value: 'problem-2', viewValue: 'problem3'},
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

