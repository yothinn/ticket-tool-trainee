import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetProblemCauseParameter } from 'app/core/parameters/getProblemCauseParameter.entity';
import { ProblemCauseService } from 'app/core/problem-cause/problem-cause.service';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';
import { Observable } from 'rxjs';
import { ProblemCauseEditDialogsComponent } from '../dialogs/problem-cause-edit-dialogs/problem-cause-edit-dialogs.component';

@Component({
  selector: 'app-problem-cause',
  templateUrl: './problem-cause.component.html',
  styleUrls: ['./problem-cause.component.scss']
})
export class ProblemCauseComponent implements OnInit {

  problemCauseResponse$?: Observable<PageResponse<ProblemCause[]>>;

  constructor(

    private _dialog: MatDialog,
    private _problemCauseService: ProblemCauseService
  ) {
    this.getProblemCauses();
  }

  ngOnInit(): void {
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

  getProblemCauses(): void {
    const params = new GetProblemCauseParameter();

    this.problemCauseResponse$ = this._problemCauseService.getProblemCauses(params);
  }

  onEdit(event: any ): void {
    console.log(event);
  }

}
