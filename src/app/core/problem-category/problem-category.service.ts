import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProblemCategories(param: GetProblemCategoryParameter): Observable<PageResponse<ProblemCategory[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<ProblemCategory[]>>(this.apiUrl.problemCategoryUrl, options);
  }

  getProblemCategory(id: string): Observable<Response<ProblemCategory>> {
    const apiUrl = `${this.apiUrl.problemCategoryUrl}/${id}`;

    return this._httpClient.get<Response<ProblemCategory>>(apiUrl);
  }
}
