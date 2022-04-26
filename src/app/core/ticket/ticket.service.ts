import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetTicketParameter } from '../parameters/getTicketParameter.entity';
import { Ticket } from './ticket.types';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly apiUrl = {
    ticketUrl: 'api/v1/tickets',
  };

  private _activeTicket: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>(undefined);

  constructor(
    private _httpClient: HttpClient
  ) { }

  set activeTicket(ticket: Ticket) {
    this._activeTicket.next(ticket);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get activeProblemCause$(): Observable<Ticket> {
    return this._activeTicket.asObservable();
  }

  getTickets(param: GetTicketParameter): Observable<PageResponse<Ticket[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Ticket[]>>(this.apiUrl.ticketUrl, options);
  }

  getTicket(id: string): Observable<Response<Ticket>> {
    const apiUrl = `${this.apiUrl.ticketUrl}/${id}`;

    return this._httpClient.get<Response<Ticket>>(apiUrl);
  }
}
