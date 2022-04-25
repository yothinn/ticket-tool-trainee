import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-problem-category-edit-dialogs',
  templateUrl: './problem-category-edit-dialogs.component.html',
  styleUrls: ['./problem-category-edit-dialogs.component.scss']
})
export class ProblemCategoryEditDialogsComponent implements OnInit {
  categoryForm?: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProblemCategoryEditDialogsComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.createCategoryForm();
  }

  createCategoryForm(): FormGroup {
    return this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  saveFrom(): void {
    const payload = this.categoryForm?.value;
    console.log(payload);

  }
  
}
