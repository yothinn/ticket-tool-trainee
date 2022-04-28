import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTeamParameter } from 'app/core/parameters/getTeamParameter.entity';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { FilterButton } from 'app/shared/components/filter-button/filter-button-interface';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit, OnDestroy {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  teamResponse$?: Observable<PageResponse<Team[]>>;

  isViewMode: boolean = false;

  buttons: FilterButton[] = [{ name: 'All', total: 20 }, { name: 'Acitvie', total: 10 }, { name: 'inActive', total: 5 }];

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
;
  getTeams(): void {
    const params = new GetTeamParameter();

    this.teamResponse$ = this._teamService.getTeams(params);
  }

  onDetail(team: Team): void {
    console.log(team);

    this._teamService.activeTeam = team;

    this.isViewMode = true;
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

  onCreate(): void {
    this.isViewMode = false;
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

}