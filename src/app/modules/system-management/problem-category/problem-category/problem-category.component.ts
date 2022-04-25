import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProblemCategoryEditDialogsComponent } from '../dialogs/problem-category-edit-dialogs/problem-category-edit-dialogs.component';

@Component({
  selector: 'app-problem-category',
  templateUrl: './problem-category.component.html',
  styleUrls: ['./problem-category.component.scss']
})
export class ProblemCategoryComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  
  openProblemCategoryDialog(): void {
    const dialogRef = this.dialog.open(ProblemCategoryEditDialogsComponent, {
      height:'230px',
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

}
