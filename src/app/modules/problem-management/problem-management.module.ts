import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProblemManagementRoutingModule } from './problem-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProblemManagementRoutingModule,
    SharedModule
  ],
})
export class ProblemManagementModule { }
