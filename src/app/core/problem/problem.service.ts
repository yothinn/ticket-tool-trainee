import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetProblemParameter } from '../parameters/getProblemParameter.entity';
import { Problem } from './problem.types';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  readonly apiUrl = {
    problemUrl: 'api/v1/problems',
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProblems(param: GetProblemParameter): Observable<PageResponse<Problem[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Problem[]>>(this.apiUrl.problemUrl, options);
  }

  getProblem(id: string): Observable<Response<Problem>> {
    const apiUrl = `${this.apiUrl.problemUrl}/${id}`;

    return this._httpClient.get<Response<Problem>>(apiUrl);
  }
}
