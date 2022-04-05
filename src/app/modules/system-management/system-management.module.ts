import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';

const ticketRoutes: Route[] = [
  {
      path     : '',
      component: TicketComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ticketRoutes),
    CommonModule
  ],
  
})
export class SystemManagementModule { }
