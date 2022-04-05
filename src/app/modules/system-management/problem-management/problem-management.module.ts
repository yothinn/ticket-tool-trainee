import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemManagementComponent } from './problem-management.component';
import { ProblemManagementRoutingModule } from './problem-management-routing.module';



@NgModule({
  declarations: [
    ProblemManagementComponent
  ],
  imports: [
    CommonModule,
    ProblemManagementRoutingModule
  ]
})
export class ProblemManagementModule { }
