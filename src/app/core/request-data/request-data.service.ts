import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetRequestDataParameter } from '../parameters/getRequestDataParameter.entity';
import { RequestData } from './request-data.types';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  readonly apiUrl = {
    requestDataUrl: 'api/v1/request-datas',
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getRequestData(param: GetRequestDataParameter): Observable<PageResponse<RequestData[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<RequestData[]>>(this.apiUrl.requestDataUrl, options);
  }

  getProblemCategory(id: string): Observable<Response<RequestData>> {
    const apiUrl = `${this.apiUrl.requestDataUrl}/${id}`;

    return this._httpClient.get<Response<RequestData>>(apiUrl);
  }
}
