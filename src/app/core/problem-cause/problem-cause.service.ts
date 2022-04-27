import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetProblemCauseParameter } from '../parameters/getProblemCauseParameter.entity';
import { ProblemCause } from './problem-cause.types';

@Injectable({
  providedIn: 'root'
})
export class ProblemCauseService {

  readonly apiUrl = {
    problemCauseUrl: 'api/v1/problem-causes',
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProblemCauses(param: GetProblemCauseParameter): Observable<PageResponse<ProblemCause[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<ProblemCause[]>>(this.apiUrl.problemCauseUrl, options);
  }

  getProblemCause(id: string): Observable<Response<ProblemCause>> {
    const apiUrl = `${this.apiUrl.problemCauseUrl}/${id}`;

    return this._httpClient.get<Response<ProblemCause>>(apiUrl);
  }
}
