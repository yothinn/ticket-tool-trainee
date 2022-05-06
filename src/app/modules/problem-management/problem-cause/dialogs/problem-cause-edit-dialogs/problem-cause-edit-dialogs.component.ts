import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Component({
  selector: 'app-problem-cause-edit-dialogs',
  templateUrl: './problem-cause-edit-dialogs.component.html',
  styleUrls: ['./problem-cause-edit-dialogs.component.scss']
})
export class ProblemCauseEditDialogsComponent implements OnInit {

  problemCause?: ProblemCause;
  causeName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ProblemCauseEditDialogsComponent>,
  ) { }

  get isNew(): boolean {
    return this.problemCause ? false : true;
  }

  ngOnInit(): void {
    this.problemCause = this._data;
    this.causeName = this.problemCause?.name;

    // console.log(this._data);
  }


  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.causeName);
  }
}
