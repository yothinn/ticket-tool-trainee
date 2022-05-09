import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.scss']
})
export class TeamMemberDialogComponent implements OnInit {

  team?: Team;

  dataMock: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<TeamMemberDialogComponent>
  ) {
    this.team = this._data.team;
  }

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
    this._dialogRef.close();
  }

  save(): void {
    this._dialogRef.close();
  }
}
