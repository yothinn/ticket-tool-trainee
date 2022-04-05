import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';


const routes: Routes = [
  {
    path: 'myticket',
    loadChildren: () => import('./my-ticket/my-ticket.module').then(m => m.MyTicketModule)
  },
  {
    path: 'ticket-management',
    loadChildren: () => import('./ticket-management/ticket-management.module').then(m => m.TicketManagementModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
