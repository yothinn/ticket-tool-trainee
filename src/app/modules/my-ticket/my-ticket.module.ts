import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTicketRoutingModule } from './my-ticket-routing.module';
import { MyTicketCardListComponent } from './components/my-ticket-card-list/my-ticket-card-list.component';
import { MyTicketCardInfoComponent } from './components/my-ticket-card-info/my-ticket-card-info.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { MyTicketInformationViewComponent } from './my-ticket-information-view/my-ticket-information-view.component';
import { MyTicketInformationEditComponent } from './my-ticket-information-edit/my-ticket-information-edit.component';
import { MyTicketInfoViewComponent } from './components/my-ticket-info-view/my-ticket-info-view.component';
import { MyTicketInfoEditComponent } from './components/my-ticket-info-edit/my-ticket-info-edit.component';
import { SharedModule } from 'app/shared/shared.module';
import { MyTicketManagementViewComponent } from './my-ticket-management-view/my-ticket-management-view.component';
import { MyTicketOrderInfoViewComponent } from './components/my-ticket-order-info-view/my-ticket-order-info-view.component';



@NgModule({
  declarations: [
    MyTicketComponent,
    MyTicketCardListComponent,
    MyTicketCardInfoComponent,
    MyTicketInformationViewComponent,
    MyTicketInformationEditComponent,
    MyTicketInfoViewComponent,
    MyTicketInfoEditComponent,
    MyTicketManagementViewComponent,
    MyTicketOrderInfoViewComponent
  ],
  imports: [
    CommonModule,
    MyTicketRoutingModule,
    SharedModule
  ]
})
export class MyTicketModule { }
