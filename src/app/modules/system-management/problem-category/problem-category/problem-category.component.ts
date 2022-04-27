import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetProblemCategoryParameter } from 'app/core/parameters/getProblemCategoryParameter.entity';
import { ProblemCategoryService } from 'app/core/problem-category/problem-category.service';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';
import { Observable, Subject } from 'rxjs';
import { ProblemCategoryEditDialogsComponent } from '../dialogs/problem-category-edit-dialogs/problem-category-edit-dialogs.component';

@Component({
  selector: 'app-problem-category',
  templateUrl: './problem-category.component.html',
  styleUrls: ['./problem-category.component.scss']
})
export class ProblemCategoryComponent implements OnInit, OnDestroy {

  problemCategoryResponse$?: Observable<PageResponse< ProblemCategory[]>>;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _dialog: MatDialog,
    private _problemCategoryService:  ProblemCategoryService
  ) {
    this.getProblemCategories();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  openProblemCategoryDialog(): void {
    const dialogRef = this._dialog.open(ProblemCategoryEditDialogsComponent, {
      height:'230px',
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  getProblemCategories(): void {
    const params = new GetProblemCategoryParameter();

    this.problemCategoryResponse$ = this._problemCategoryService.getProblemCategories(params);
  }

}
