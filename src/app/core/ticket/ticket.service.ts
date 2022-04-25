import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private _httpClient: HttpClient
  ) { }

  getTickets(param: GetTicketParameter): Observable<PageResponse<Ticket[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Ticket[]>>(this.apiUrl.ticketUrl, options);
  }

  getTicket(id: string): Observable<Response<Ticket>> {
    const apiUrl = `${this.apiUrl.ticketUrl}/${id}`;

    return this._httpClient.get<Response<Ticket>>(apiUrl);
  }
}
