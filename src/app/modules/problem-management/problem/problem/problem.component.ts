import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetProblemCategoryParameter } from 'app/core/parameters/getProblemCategoryParameter.entity';
import { GetProblemParameter } from 'app/core/parameters/getProblemParameter.entity';
import { GetTeamParameter } from 'app/core/parameters/getTeamParameter.entity';
import { ProblemCategoryService } from 'app/core/problem-category/problem-category.service';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { FilterButton } from 'app/shared/components/filter-button/filter-button-interface';
import { Observable, Subject } from 'rxjs';
import { ProblemCardListComponent } from '../components/problem-card-list/problem-card-list.component';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit, OnDestroy {
  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  // @ViewChild('problemListComp') problemListComp: ProblemCardListComponent;

  problemsResponse$?: Observable<PageResponse<Problem[]>>;
  problemCategoriesResponse$?: Observable<PageResponse<ProblemCategory[]>>;
  teamsResponse$?: Observable<PageResponse<Team[]>>;


  isViewMode: boolean = false;
  problemInfoMode: 'create' | 'edit' = 'create';

  filters: FilterButton[] = [{ name: 'All', total: 20 }, { name: 'Active', total: 10 }, { name: 'InActive', total: 5 }];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _problemService: ProblemService,
    private _problemCategoryService: ProblemCategoryService,
    private _teamService: TeamService
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
    const paramsProBlem = new GetProblemParameter();
    const paramsCategory = new GetProblemCategoryParameter();
    const paramsTeam = new GetTeamParameter();

    this.problemsResponse$ = this._problemService.getProblems(paramsProBlem);
    this.problemCategoriesResponse$ = this._problemCategoryService.getProblemCategories(paramsCategory);
    this.teamsResponse$ = this._teamService.getTeams(paramsTeam);
  }

  onProblemEdit(mode: 'create' | 'edit' ): void {
    this.isViewMode = false;
    this.problemInfoMode = mode;
    this._openDetail();
  }

  onViewClosed(): void {
    this.drawerDetail.toggle();
    this._problemService.activeProblem = undefined;
    // this.problemListComp.activeTeam = undefined;
  }

  onViewOpened(problem: Problem): void {
    this._problemService.activeProblem = problem;

    this.isViewMode = true;
    this._openDetail();
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }
}
