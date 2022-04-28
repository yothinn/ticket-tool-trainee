import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-problem-cause-edit-dialogs',
  templateUrl: './problem-cause-edit-dialogs.component.html',
  styleUrls: ['./problem-cause-edit-dialogs.component.scss']
})
export class ProblemCauseEditDialogsComponent implements OnInit {
  causeForm?: FormGroup;

  constructor(

    @Inject(MAT_DIALOG_DATA) private _data:any,
    private _dialogRef: MatDialogRef<ProblemCauseEditDialogsComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.causeForm = this.createCauseForm(this._data)
    console.log(this._data)
  }

  createCauseForm(causeData:any): FormGroup {
    return this._formBuilder.group({
      causeName: [causeData?.name, Validators.required]
    });
  }

  close(): void {
    this._dialogRef.close();
  }

  saveFrom(): void {
    const payload = this.causeForm?.value;
    console.log(payload);

  }
}
