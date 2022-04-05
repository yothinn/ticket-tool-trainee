import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketManagementComponent } from './ticket-management.component';
import { TicketManagementRoutingModule } from './ticket-management-routing.module';



@NgModule({
  declarations: [
    TicketManagementComponent
  ],
  imports: [
    CommonModule,
    TicketManagementRoutingModule
  ]
})
export class TicketManagementModule { }
