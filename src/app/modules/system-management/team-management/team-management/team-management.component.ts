import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { Filter } from 'app/shared/components/filter-button/filter-button-interface';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  teams: Team[] = [];
  isViewMode: boolean = false;

  button: Filter[] = [{ name: 'All', total: 20 }, { name: 'Acitvie', total: 10 }, { name: 'inActive', total: 5 }];

  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
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
