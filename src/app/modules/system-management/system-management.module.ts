import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SystemManagementRoutingModule } from './system-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SystemManagementRoutingModule,
    SharedModule
  ],
})
export class SystemManagementModule { }
