import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetProblemCategoryParameter } from '../parameters/getProblemCategoryParameter.entity';
import { ProblemCategory } from './problem-category.types';

@Injectable({
  providedIn: 'root'
})
export class ProblemCategoryService {

  readonly apiUrl = {
    problemCategoryUrl: 'api/v1/problem-categories',
  };

  private _activeProblemCategory: BehaviorSubject<ProblemCategory> = new BehaviorSubject<ProblemCategory>(undefined);

  constructor(
    private _httpClient: HttpClient
  ) { }

  set activeProblemCategory(problemCategory: ProblemCategory) {
    this._activeProblemCategory.next(problemCategory);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get activeProblemCategory$(): Observable<ProblemCategory> {
    return this._activeProblemCategory.asObservable();
  }

  getProblemCategories(param: GetProblemCategoryParameter): Observable<PageResponse<ProblemCategory[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<ProblemCategory[]>>(this.apiUrl.problemCategoryUrl, options);
  }

  getProblemCategory(id: string): Observable<Response<ProblemCategory>> {
    const apiUrl = `${this.apiUrl.problemCategoryUrl}/${id}`;

    return this._httpClient.get<Response<ProblemCategory>>(apiUrl);
  }
}
