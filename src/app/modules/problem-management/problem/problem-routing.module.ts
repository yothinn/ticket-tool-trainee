import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProblemComponent } from './problem/problem.component';


const routes: Route[] = [
  {
      path     : '',
      component: ProblemComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
})
export class ProblemRoutingModule { }
