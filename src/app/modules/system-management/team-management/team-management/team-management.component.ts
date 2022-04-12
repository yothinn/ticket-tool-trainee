import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  // @ViewChild('drawer') drawer: MatSidenav;
  isViewMode: boolean = false;

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
