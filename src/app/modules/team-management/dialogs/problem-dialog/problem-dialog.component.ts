import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemService } from 'app/core/problem/problem.service';
import { Team } from 'app/core/team/team.types';


@Component({
  selector: 'app-problem-dialog',
  templateUrl: './problem-dialog.component.html',
  styleUrls: ['./problem-dialog.component.scss']
})
export class ProblemDialogComponent implements OnInit {

  team?: Team;

  data: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ProblemDialogComponent>,
    private _problemService: ProblemService,
  ) { 
    this.team = this._data.team;
  }

  ngOnInit(): void {
    // console.log(this.criticalityMode)
    // this.criticalityMode = 1;

    this.data = [
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
      },
      {
        no: 'PB0000001',
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
        no: 'PB0000001',
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
        no: 'PB0000001',
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
    this._dialogRef.close();
  }

  save(): void {
    this._dialogRef.close();
  }

}
