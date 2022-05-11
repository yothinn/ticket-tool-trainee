import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-analyze-dialog',
  templateUrl: './ticket-analyze-dialog.component.html',
  styleUrls: ['./ticket-analyze-dialog.component.scss']
})
export class TicketAnalyzeDialogComponent implements OnInit {

  ticket: Ticket;

  problems: any[] = [
    {value: 'problem-0', viewValue: 'problem1'},
    {value: 'problem-1', viewValue: 'problem2'},
    {value: 'problem-2', viewValue: 'problem3'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<TicketAnalyzeDialogComponent>
  ) {
    this.ticket = this._data.ticket;
  }

  ngOnInit(): void {
  }

  close(): void {
    this._dialogRef.close();
  }

  save(): void {
    this._dialogRef.close();
  }
}

