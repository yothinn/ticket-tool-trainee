import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { PageResponse } from '../base/pageResponse.types';
import { Response } from '../base/response.types';
import { GetTeamParameter } from '../parameters/getTeamParameter.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamStatusDto } from './dto/team-status.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.types';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  readonly baseTeamUrl = `${environment.apiUrl}/api/v1/teams`;
  readonly apiUrl = {
    teamUrl: this.baseTeamUrl,
    getTeamWithIdUrl: (id: string): string => `${this.baseTeamUrl}/${id}`,
    allStatusUrl: `${this.baseTeamUrl}/allstatus` ,
  };

  private _activeTeam: BehaviorSubject<Team> = new BehaviorSubject<Team>(undefined);

  constructor(
    private _httpClient: HttpClient
  ) { }

  get activeTeam$(): Observable<Team> {
    return this._activeTeam.asObservable();
  }

  set activeTeam(team: Team) {
    this._activeTeam.next(team);
  }


  getTeams(param: GetTeamParameter): Observable<PageResponse<Team[]>> {
    const options = { params: param.toHttpParams() };

    return this._httpClient.get<PageResponse<Team[]>>(this.apiUrl.teamUrl, options);
  }

  getTeam(id: string): Observable<Team> {
    return this._httpClient.get<Response<Team>>(this.apiUrl.getTeamWithIdUrl(id))
      .pipe(map((response: Response<Team>) => response.data));
  }

  getAllStatus(): Observable<TeamStatusDto[]> {
    return this._httpClient.get<Response<TeamStatusDto[]>>(this.apiUrl.allStatusUrl)
      .pipe(map((response: Response<TeamStatusDto[]>) => response.data));
  }

  create(createDto: CreateTeamDto): Observable<Team> {
    return this._httpClient.post<Response<Team>>(this.apiUrl.teamUrl, createDto)
      .pipe(map((response: Response<Team>) => response.data));
  }

  update(id: string, updateDto: UpdateTeamDto): Observable<Team> {
    return this._httpClient.patch<Response<Team>>(this.apiUrl.getTeamWithIdUrl(id), updateDto)
      .pipe(map((response: Response<Team>) => response.data));
  }

  delete(id: string): Observable<Team> {
    return this._httpClient.delete<Response<Team>>(this.apiUrl.getTeamWithIdUrl(id))
      .pipe(map((response: Response<Team>) => response.data));
  }

}
