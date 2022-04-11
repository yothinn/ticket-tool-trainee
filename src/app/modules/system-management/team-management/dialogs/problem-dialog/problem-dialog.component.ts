import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-problem-dialog',
  templateUrl: './problem-dialog.component.html',
  styleUrls: ['./problem-dialog.component.scss']
})
export class ProblemDialogComponent implements OnInit {

  dataMock: any[];

  constructor(
    public dialogRef: MatDialogRef<ProblemDialogComponent>
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
        member:[
          'Team 1',
          'Team 2',
        ]
      },
      {
        firstName: 'Lex3',
        lastName: 'Test3',
        email:'Lex3@gmail.com',
        member:[
          'Team 1',
          'Team 2',
        ]
      }
    ];
  }

  close(): void {
    this.dialogRef.close();
  }

}
