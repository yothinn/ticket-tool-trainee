import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTicketComponent } from './my-ticket.component';
import { MyTicketRoutingModule } from './my-ticket-routing.module';



@NgModule({
  declarations: [
    MyTicketComponent
  ],
  imports: [
    CommonModule,
    MyTicketRoutingModule
  ]
})
export class MyTicketModule { }
