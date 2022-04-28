import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Component({
  selector: 'app-problem-category-edit-dialogs',
  templateUrl: './problem-category-edit-dialogs.component.html',
  styleUrls: ['./problem-category-edit-dialogs.component.scss']
})
export class ProblemCategoryEditDialogsComponent implements OnInit {

  problemCategory?: ProblemCategory;
  isNew: boolean = true;

  categoryName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ProblemCategoryEditDialogsComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.problemCategory = this._data;
    this.isNew = (this.problemCategory) ? false : true;
    this.categoryName = this.problemCategory?.name;

    console.log(this._data);
  }

  close(): void {
    this._dialogRef.close();
  }

  save(): void {
    this._dialogRef.close(this.categoryName);
  }
}
