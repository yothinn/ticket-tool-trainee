import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketComponent } from './my-ticket/my-ticket.component';


const routes: Routes = [
  {
    path: '',
    component: MyTicketComponent,
    data: { breadcrumb: null }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyTicketRoutingModule { }
