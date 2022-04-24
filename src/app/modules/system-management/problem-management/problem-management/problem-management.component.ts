import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { Filter } from 'app/shared/components/filter-button/filter-button-interface';

@Component({
  selector: 'app-problem-management',
  templateUrl: './problem-management.component.html',
  styleUrls: ['./problem-management.component.scss']
})
export class ProblemManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  problems: Problem[] = [];
  isViewMode: boolean = false;

  button: Filter[] = [
    { name: 'All', total: 20 },
    { name: 'Acitvie', total: 10 },
    { name: 'inActive', total: 5 }
  ];

  constructor(
    private problemService: ProblemService,
  ) { }

  ngOnInit(): void {
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
