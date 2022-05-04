import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTicketParameter } from 'app/core/parameters/getTicketParameter.entity';
import { TicketService } from 'app/core/ticket/ticket.service';
import { Ticket } from 'app/core/ticket/ticket.types';
import { Observable } from 'rxjs';
import { TicketCardListComponent } from '../components/ticket-card-list/ticket-card-list.component';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;

  @ViewChild('ticketListComp') ticketListComp: TicketCardListComponent;

  ticketResponse$?: Observable<PageResponse<Ticket[]>>;

  isViewMode: boolean = false;

  constructor(
    private _ticketService: TicketService
  ) {
    this.getTickets();
  }

  ngOnInit(): void {
  }

  getTickets(): void {
    const param = new GetTicketParameter();

    this.ticketResponse$ = this._ticketService.getTickets(param);
  }

  onViewOpened(ticket: Ticket): void {
    console.log(ticket);

    this._ticketService.activeTicket = ticket;

    this.isViewMode = true;
    this._openDetail();
  }

  onViewClosed(): void {
    this.drawerDetail.toggle();
    this._ticketService.activeTicket = undefined;
    this.ticketListComp.activeTicket = undefined;
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

}
