import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-change-dialog',
  templateUrl: './ticket-change-dialog.component.html',
  styleUrls: ['./ticket-change-dialog.component.scss']
})
export class TicketChangeDialogComponent implements OnInit {

  isViewMode: boolean = false;

  Causes: any[] = [
    {value: 'Cause-0', viewValue: 'Cause1'},
    {value: 'Cause-1', viewValue: 'Cause2'},
    {value: 'Cause-2', viewValue: 'Cause3'},
  ];

  constructor(
    public dialogRef: MatDialogRef<TicketChangeDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  onChangeStatus(event: any ): void {
    console.log(event);
  }
}
