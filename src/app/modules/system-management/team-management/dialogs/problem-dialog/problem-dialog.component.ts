import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CriticalityMode } from 'app/shared/components/criticality-icon/criticality-icon.component';

@Component({
  selector: 'app-problem-dialog',
  templateUrl: './problem-dialog.component.html',
  styleUrls: ['./problem-dialog.component.scss']
})
export class ProblemDialogComponent implements OnInit {
  criticalityMode = CriticalityMode.Medium;
  data: any[];

  constructor(
    public dialogRef: MatDialogRef<ProblemDialogComponent>
    
  ) { }

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
    this.dialogRef.close();
  }

}
