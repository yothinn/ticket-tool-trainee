import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';


const routes: Routes = [
  {
    path: '',
    component: TicketManagementComponent,
    data: { breadcrumb: null }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketManagementRoutingModule { }
