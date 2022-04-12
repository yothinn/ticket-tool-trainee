import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProblemManagementComponent } from './problem-management/problem-management.component';


const routes: Route[] = [
  {
      path     : '',
      component: ProblemManagementComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
})
export class ProblemManagementRoutingModule { }
