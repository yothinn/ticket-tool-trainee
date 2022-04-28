import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.scss']
})
export class TeamMemberDialogComponent implements OnInit {

  dataMock: any[];

  constructor(
    public dialogRef: MatDialogRef<TeamMemberDialogComponent>
  ) { }

  ngOnInit(): void {
    this.dataMock = [
      {
        firstName: 'Lex1',
        lastName: 'Test1',
        email:'Lex1@gmail.com',
        members:[
          'Team 1',
          'Team 2',
        ]
      },
      {
        firstName: 'Lex2',
        lastName: 'Test2',
        email:'Lex2@gmail.com',
        members:[
          'Team 3',
          'Team 4',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        members:[
          'Team 5',
          'Team 6',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        members:[
          'Team 5',
          'Team 6',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        members:[
          'Team 5',
          'Team 6',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        members:[
          'Team 5',
          'Team 6',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        members:[
          'Team 5',
          'Team 6',
        ]
      },
    ];
  }

  close(): void {
    this.dialogRef.close();
  }

}
