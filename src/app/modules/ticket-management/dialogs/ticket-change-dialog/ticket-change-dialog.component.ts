import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketStatus } from 'app/core/ticket/ticket-status.enum';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-ticket-change-dialog',
  templateUrl: './ticket-change-dialog.component.html',
  styleUrls: ['./ticket-change-dialog.component.scss']
})
export class TicketChangeDialogComponent implements OnInit {

  ticket: Ticket;
  ticketStatus = TicketStatus;

  status: TicketStatus = TicketStatus.closed;
  causeForm: FormGroup;

  causes: any[] = [
    {value: 'Cause-0', viewValue: 'Cause1'},
    {value: 'Cause-1', viewValue: 'Cause2'},
    {value: 'Cause-2', viewValue: 'Cause3'},
  ];



  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<TicketChangeDialogComponent>,
    private _formBuilder: FormBuilder,
  ) {
    this.ticket = this._data.ticket;
  }

  ngOnInit(): void {

    this.causeForm = this.initCauseForm();
  }

  initCauseForm(): FormGroup {
    return this._formBuilder.group({
      cause: ['', Validators.required],
      solution: ['', Validators.required]
    });
  }

  close(): void {
    this._dialogRef.close();
  }

  save(): void {
    this._dialogRef.close();
  }
}
