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
        No: 'PB0000001',
        problemName: 'Problem Name 1',
        description:'Description',
        category:'Category 1',
        criticality:{
          text:'Critical 4Hrs',
          iconName:'circle',
          color:'#c42a2e',
          mode:1
        }
      },
      {
        No: 'PB0000001',
        problemName: 'Problem Name 1',
        description:'Description',
        category:'Category 1',
        criticality:{
          text:'Critical 4Hrs',
          iconName:'circle',
          color:'#c42a2e',
          mode:1
        }
      },
      {
        No: 'PB0000001',
        problemName: 'Problem Name 1',
        description:'Description',
        category:'Category 1',
        criticality:{
          text:'Critical 4Hrs',
          iconName:'circle',
          color:'#c42a2e',
          mode:1
        }
      }
    ];
  }

  close(): void {
    this.dialogRef.close();
  }

}
