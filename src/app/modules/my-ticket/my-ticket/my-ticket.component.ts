import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTicketParameter } from 'app/core/parameters/getTicketParameter.entity';
import { TicketService } from 'app/core/ticket/ticket.service';
import { Ticket } from 'app/core/ticket/ticket.types';
import { Observable, Subject } from 'rxjs';
import { MyTicketCardListComponent } from '../components/my-ticket-card-list/my-ticket-card-list.component';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.scss']
})
export class MyTicketComponent implements OnInit, OnDestroy {

  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  @ViewChild('ticketListComp') ticketListComp: MyTicketCardListComponent;

  ticketResponse$?: Observable<PageResponse<Ticket[]>>;

  isViewMode: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _ticketService: TicketService,
  ) {
    this.getMyTickets();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getMyTickets(): void {
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

  onCreateOpened(): void {
    this.isViewMode = false;
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

  onCreateClosed(event: boolean): void {
    this.drawerDetail.toggle();
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

}
