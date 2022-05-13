import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTeamParameter } from 'app/core/parameters/getTeamParameter.entity';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { FilterButton } from 'app/shared/components/filter-button/filter-button-interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TeamCardListComponent } from '../components/team-card-list/team-card-list.component';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit, OnDestroy {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  @ViewChild('teamListComp') teamListComp: TeamCardListComponent;

  teamResponse$?: Observable<PageResponse<Team[]>>;

  isViewMode: boolean = false;
  teamInfoMode: 'create' | 'edit' = 'create';

  filters: FilterButton[] = [{ status: 'all', total: 20 }, { status: 'active', total: 10 }, { status: 'inactive', total: 5 }];
  currFilter?: FilterButton = this.filters[0];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _teamService: TeamService,
  ) {
    this.getTeams();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getTeams(): void {
    const params = new GetTeamParameter();

    this.teamResponse$ = this._teamService.getTeams(params);
  }

  onViewOpened(team: Team): void {
    console.log(team);

    this._teamService.activeTeam = team;

    this.isViewMode = true;
    this._openDetail();
  }

  onViewClosed(): void {
    this.drawerDetail.toggle();
    this._teamService.activeTeam = undefined;
    this.teamListComp.activeTeam = undefined;
  }

  onTeamEdit(mode: 'create' | 'edit'): void {

    this.isViewMode = false;
    this.teamInfoMode = mode;

    this._openDetail();
  }

  onTeamEditClosed(event: boolean): void {
    // True is save, false is cancel
    this.drawerDetail.toggle();
  }

  onFilter(filter: FilterButton): void {
    this.currFilter = filter;

    // call get team
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

}
