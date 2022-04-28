import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetProblemCategoryParameter } from 'app/core/parameters/getProblemCategoryParameter.entity';
import { ProblemCategoryService } from 'app/core/problem-category/problem-category.service';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';
import { Observable } from 'rxjs';
import { ProblemCategoryEditDialogsComponent } from '../dialogs/problem-category-edit-dialogs/problem-category-edit-dialogs.component';

@Component({
  selector: 'app-problem-category',
  templateUrl: './problem-category.component.html',
  styleUrls: ['./problem-category.component.scss']
})
export class ProblemCategoryComponent implements OnInit {

  problemCategoryResponse$?: Observable<PageResponse< ProblemCategory[]>>;

  constructor(

    private _dialog: MatDialog,
    private _problemCategoryService:  ProblemCategoryService
  ) {
    this.getProblemCategories();
  }

  ngOnInit(): void {
  }

  openProblemCategoryDialog(data?: {index: number; problemCategory: ProblemCategory}): void {
    console.log(data);

    const dialogRef = this._dialog.open(ProblemCategoryEditDialogsComponent, {
      height:'230px',
      width: '40%',
      data: data?.problemCategory
    });

    dialogRef.afterClosed().subscribe((categoryName: string) => {
      console.log('The dialog was closed');
      if (categoryName) {

      }
    });
  }

  getProblemCategories(): void {
    const params = new GetProblemCategoryParameter();

    this.problemCategoryResponse$ = this._problemCategoryService.getProblemCategories(params);
  }
}
