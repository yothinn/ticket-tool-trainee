import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Filter } from 'app/shared/components/filter-button/filter-button-interface';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  isViewMode: boolean = false;

  button: Filter[] = [{ name: 'All', total: 20 }, { name: 'Acitvie', total: 10 }, { name: 'inActive', total: 5 }];

  constructor() { }

  ngOnInit(): void {
  }

  onDetail(item: any): void {
    console.log(item);
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
