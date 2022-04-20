import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-owner-dialog',
  templateUrl: './team-owner-dialog.component.html',
  styleUrls: ['./team-owner-dialog.component.scss']
})
export class TeamOwnerDialogComponent implements OnInit {

  teamOwnerDataMocks: any[];

  constructor(
    public dialogRef: MatDialogRef<TeamOwnerDialogComponent>
  ) { }

  ngOnInit(): void {
    this.teamOwnerDataMocks = [
      {
        name: 'Lex1',
        description: 'Test1',
        total: '0 Member',
      },
      {
        name: 'Lex2',
        description: 'Test2',
        total: '0 Member',
      },
      {
        name: 'Lex3',
        description: 'Test3',
        total: '0 Member',
      },
      {
        name: 'Lex3',
        description: 'Test3',
        total: '0 Member',
      },
      {
        name: 'Lex3',
        description: 'Test3',
        total: '0 Member',
      },
      {
        name: 'Lex3',
        description: 'Test3',
        total: '0 Member',
      },
      {
        name: 'Lex3',
        description: 'Test3',
        total: '0 Member',
      },
    ];
  }

  close(): void {
    this.dialogRef.close();
  }

}
