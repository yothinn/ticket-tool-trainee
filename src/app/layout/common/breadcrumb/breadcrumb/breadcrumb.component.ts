import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from '../breadcrumb.service';
import { Breadcrumb } from '../breadcrumb.types';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumb$: Observable<Breadcrumb[]>;

  constructor(
    private _breadcrumbService: BreadcrumbService,
  ) {
    this.breadcrumb$ = this._breadcrumbService.breadcrumb$;
  }

  ngOnInit(): void {
  }

}
