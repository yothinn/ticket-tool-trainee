import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTeamParameter } from 'app/core/parameters/getTeamParameter.entity';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { Filter } from 'app/shared/components/filter-button/filter-button-interface';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-problem-management',
  templateUrl: './problem-management.component.html',
  styleUrls: ['./problem-management.component.scss']
})
export class ProblemManagementComponent implements OnInit, OnDestroy {
  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  // problems: Problem[] = [];
  problemsResponse$?: Observable<PageResponse<Problem[]>>;

  isViewMode: boolean = false;

  button: Filter[] = [
    { name: 'All', total: 20 },
    { name: 'Acitvie', total: 10 },
    { name: 'inActive', total: 5 }
  ];
  
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _problemService: ProblemService,
  ) { 
    this.getProblemsData();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


  getProblemsData(): void{
    const params = new GetTeamParameter();

    this.problemsResponse$ = this._problemService.getProblems(params);
  }

  onDetail(event: any): void {
    console.log(event);
    this.isViewMode = true;
    this.drawerDetail?.toggle();
  }

  onCreate(): void {
    this.isViewMode = false;
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }
}
