import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaManagementRoutingModule } from './sla-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlaManagementRoutingModule,
    SharedModule
  ]
})
export class SlaManagementModule { }
