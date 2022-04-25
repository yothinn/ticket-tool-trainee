import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTeamsParameter } from 'app/core/parameters/getTeamsParameter.entity';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { Filter } from 'app/shared/components/filter-button/filter-button-interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit, OnDestroy {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  teams: Team[] = [];
  isViewMode: boolean = false;

  button: Filter[] = [{ name: 'All', total: 20 }, { name: 'Acitvie', total: 10 }, { name: 'inActive', total: 5 }];

  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getTeams(): void {
    const params = new GetTeamsParameter();

    this._teamService.getTeams(params)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((result: PageResponse<Team[]>) => {
        console.log(result);
      });
  }

  onDetail(item: Team): void {
    // console.log(item);
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
