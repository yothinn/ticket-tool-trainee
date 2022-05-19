import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTicketParameter } from 'app/core/parameters/getTicketParameter.entity';
import { TicketService } from 'app/core/ticket/ticket.service';
import { Ticket } from 'app/core/ticket/ticket.types';
import { FilterButton } from 'app/shared/components/filter-button/filter-button.type';
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

  filters: FilterButton[] = [
    { status: 'All', total: 100 },
    { status: 'wait for approve', total: 10 },
    { status: 'wait for reassign', total: 5 },
    { status: 'assigned', total: 5 },
    { status: 'processing', total: 5 },
    { status: 'closed', total: 5 },
    { status: 'unresolved', total: 5 },
    { status: 'cancelled', total: 5 },
  ];
  currFilter?: FilterButton = this.filters[0];

  myTaskFilters: FilterButton[] = [
    { status: 'My Task', total: 0 },
  ];

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
    this._ticketService.activeTicket = ticket;

    this.isViewMode = true;
    this._openDetail();
  }

  onViewClosed(): void {
    this.drawerDetail.toggle();
    this._ticketService.activeTicket = undefined;
    this.ticketListComp.activeTicket = undefined;
  }

  onStatusFilter(filter: FilterButton): void {

  }

  onMyTaskFilter(filter: FilterButton): void {
    console.log(filter);
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

}
