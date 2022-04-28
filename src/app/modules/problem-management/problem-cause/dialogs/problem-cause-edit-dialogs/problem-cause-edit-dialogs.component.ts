import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Component({
  selector: 'app-problem-cause-edit-dialogs',
  templateUrl: './problem-cause-edit-dialogs.component.html',
  styleUrls: ['./problem-cause-edit-dialogs.component.scss']
})
export class ProblemCauseEditDialogsComponent implements OnInit {

  problemCause?: ProblemCause;
  isNew: boolean = true;

  causeName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ProblemCauseEditDialogsComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.problemCause = this._data;
    this.isNew = (this.problemCause) ? false : true;
    this.causeName = this.problemCause?.name;

    console.log(this._data);
  }


  close(): void {
    this._dialogRef.close(undefined);
  }

  save(): void {
    this._dialogRef.close(this.causeName);
  }
}
