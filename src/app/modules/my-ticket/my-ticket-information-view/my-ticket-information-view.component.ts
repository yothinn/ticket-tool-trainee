import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from 'app/core/ticket/ticket.service';
import { Ticket } from 'app/core/ticket/ticket.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-ticket-information-view',
  templateUrl: './my-ticket-information-view.component.html',
  styleUrls: ['./my-ticket-information-view.component.scss']
})
export class MyTicketInformationViewComponent implements OnInit {

  @Output() closed = new EventEmitter<any>();
  // @Output() closed = new EventEmitter<any>();
  // @Output() edit = new EventEmitter<any>();

  activeTicket$: Observable<Ticket> = this._ticketService.activeTicket$;
  // teamStatus = TeamStatus;

  // private _unsubscribeAll: Subject<any> = new Subject<any>();

  // constructor(
  //   private _teamService: TeamService
  // ) { }
  constructor(
    private _ticketService: TicketService
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit(undefined);
  }

}
