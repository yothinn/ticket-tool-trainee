import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
