import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Component({
  selector: 'app-problem-cause-list',
  templateUrl: './problem-cause-list.component.html',
  styleUrls: ['./problem-cause-list.component.scss']
})
export class ProblemCauseListComponent implements OnInit {

  @Input() problemCauses?: ProblemCause[];

  @Output() edit= new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit(): void {

    console.log(this.problemCauses);
  }

  onSelectEdit(cause: ProblemCause, index: number): void {
    this.edit.emit({
      index: index,
      problemCause: cause,
    });
  }

  // openProblemCauseDialog(problemCause: any): void {
  //   const dialogRef = this._dialog.open(ProblemCauseEditDialogsComponent, {
  //     height:'230px',
  //     width: '40%',
  //     data: problemCause
  //   });

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
