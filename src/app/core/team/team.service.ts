import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetTeamParameter } from '../parameters/getTeamParameter.entity';
import { TeamStatusDto } from './team-status.dto';
import { Team } from './team.types';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly apiUrl = {
    getTeam: `${environment.apiUrl}/api/v1/teams`,
    allStatus: `${environment.apiUrl}/api/v1/allstatus`,
  };

  private _activeTeam: BehaviorSubject<Team> = new BehaviorSubject<Team>(undefined);

  constructor(
    private _httpClient: HttpClient
  ) { }

  set activeTeam(team: Team) {
    this._activeTeam.next(team);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get activeTeam$(): Observable<Team> {
    return this._activeTeam.asObservable();
  }

  getTeams(param: GetTeamParameter): Observable<PageResponse<Team[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Team[]>>(this.apiUrl.getTeam, options);
  }

  getTeam(id: string): Observable<Response<Team>> {
    const apiUrl = `${this.apiUrl.getTeam}/${id}`;

    return this._httpClient.get<Response<Team>>(apiUrl);
  }

  getAllStatus(): Observable<Response<TeamStatusDto>> {
    return this._httpClient.get<Response<TeamStatusDto>>(this.apiUrl.allStatus);
  }

}
