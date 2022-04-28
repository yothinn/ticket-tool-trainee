import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';
import { ProblemCauseEditDialogsComponent } from '../../dialogs/problem-cause-edit-dialogs/problem-cause-edit-dialogs.component';

@Component({
  selector: 'app-problem-cause-list',
  templateUrl: './problem-cause-list.component.html',
  styleUrls: ['./problem-cause-list.component.scss']
})
export class ProblemCauseListComponent implements OnInit {

  @Input() problemCauses?: ProblemCause[];

  
 
  constructor(

    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {

    console.log(this.problemCauses);
  }

  openProblemCauseDialog(problemCause:any): void {
    const dialogRef = this._dialog.open(ProblemCauseEditDialogsComponent, {
      height:'230px',
      width: '40%',
      data: problemCause
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
