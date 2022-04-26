import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  private _activeProblemCause: BehaviorSubject<ProblemCause> = new BehaviorSubject<ProblemCause>(undefined);

  constructor(
    private _httpClient: HttpClient
  ) { }

  set activeProblemCause(problemCause: ProblemCause) {
    this._activeProblemCause.next(problemCause);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get activeProblemCause$(): Observable<ProblemCause> {
    return this._activeProblemCause.asObservable();
  }

  getProblemCategories(param: GetProblemCauseParameter): Observable<PageResponse<ProblemCause[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<ProblemCause[]>>(this.apiUrl.problemCauseUrl, options);
  }

  getProblemCategory(id: string): Observable<Response<ProblemCause>> {
    const apiUrl = `${this.apiUrl.problemCauseUrl}/${id}`;

    return this._httpClient.get<Response<ProblemCause>>(apiUrl);
  }
}
