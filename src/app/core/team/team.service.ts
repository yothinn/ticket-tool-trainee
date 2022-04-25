import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetTeamsParameter } from '../parameters/getTeamsParameter.entity';
import { Team } from './team.types';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly apiUrl = {
    teamUrl: 'api/v1/teams',
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getTeams(param: GetTeamsParameter): Observable<PageResponse<Team[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Team[]>>(this.apiUrl.teamUrl, options);
  }

  getTeam(id: string): Observable<Response<Team>> {
    const apiUrl = `${this.apiUrl.teamUrl}/${id}`;

    return this._httpClient.get<Response<Team>>(apiUrl);
  }

}
