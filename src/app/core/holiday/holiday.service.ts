import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetHolidayParameter } from '../parameters/getHolidayParameter.entity';
import { Holiday } from './holiday.types';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  readonly apiUrl = {
    holidayUrl: 'api/v1/holidays',
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getHolidays(param: GetHolidayParameter): Observable<PageResponse<Holiday[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Holiday[]>>(this.apiUrl.holidayUrl, options);
  }

  getHoliday(id: string): Observable<Response<Holiday>> {
    const apiUrl = `${this.apiUrl.holidayUrl}/${id}`;

    return this._httpClient.get<Response<Holiday>>(apiUrl);
  }
}
