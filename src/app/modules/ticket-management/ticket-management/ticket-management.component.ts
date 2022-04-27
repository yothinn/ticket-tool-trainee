import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  isViewMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDetail(item: any): void {
    console.log(item);
    this.isViewMode = true;
    this.drawerDetail?.toggle();
  }

}
