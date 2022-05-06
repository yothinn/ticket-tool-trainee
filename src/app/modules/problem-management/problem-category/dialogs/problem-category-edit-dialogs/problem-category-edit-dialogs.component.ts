import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Component({
  selector: 'app-problem-category-edit-dialogs',
  templateUrl: './problem-category-edit-dialogs.component.html',
  styleUrls: ['./problem-category-edit-dialogs.component.scss']
})
export class ProblemCategoryEditDialogsComponent implements OnInit {

  problemCategory?: ProblemCategory;

  categoryName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ProblemCategoryEditDialogsComponent>,
  ) { }

  get isNew(): boolean {
    return this.problemCategory ? false : true;
  }

  ngOnInit(): void {

  this.problemCategory = this._data;
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
