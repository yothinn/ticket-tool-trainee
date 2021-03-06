import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketManagementRoutingModule } from './ticket-management-routing.module';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { TicketInfoViewComponent } from './components/ticket-info-view/ticket-info-view.component';
import { TicketContactInfoViewComponent } from './components/ticket-contact-info-view/ticket-contact-info-view.component';
import { TicketOrderInfoViewComponent } from './components/ticket-order-info-view/ticket-order-info-view.component';
import { TicketInformationViewComponent } from './ticket-information-view/ticket-information-view.component';
import { TicketCardListComponent } from './components/ticket-card-list/ticket-card-list.component';
import { TicketCardInfoComponent } from './components/ticket-card-info/ticket-card-info.component';
import { SharedModule } from 'app/shared/shared.module';
import { TicketAnalyzeDialogComponent } from './dialogs/ticket-analyze-dialog/ticket-analyze-dialog.component';
import { TicketChangeDialogComponent } from './dialogs/ticket-change-dialog/ticket-change-dialog.component';
import { TicketManagementViewComponent } from './ticket-management-view/ticket-management-view.component';
import { ConversationModule } from '../conversation/conversation.module';
import { TicketHistoryComponent } from './components/ticket-history/ticket-history.component';




@NgModule({
  declarations: [
    TicketManagementComponent,
    TicketContactInfoViewComponent,
    TicketOrderInfoViewComponent,
    TicketInfoViewComponent,
    TicketInformationViewComponent,
    TicketCardListComponent,
    TicketCardInfoComponent,
    TicketAnalyzeDialogComponent,
    TicketChangeDialogComponent,
    TicketManagementViewComponent,
    TicketHistoryComponent
  ],
  imports: [
    CommonModule,
    TicketManagementRoutingModule,
    SharedModule,
    ConversationModule
  ]
})
export class TicketManagementModule { }
