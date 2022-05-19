import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { TeamStatus } from 'app/core/team/team-status.enum';
import { Observable, Subject, takeUntil, switchMap, filter } from 'rxjs';

@Component({
  selector: 'app-team-information-view',
  templateUrl: './team-information-view.component.html',
  styleUrls: ['./team-information-view.component.scss']
})
export class TeamInformationViewComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() del = new EventEmitter<any>();

  activeTeam$: Observable<Team>;
  teamStatus = TeamStatus;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.activeTeam$ = this._teamService.activeTeam$
      .pipe(
        takeUntil(this._unsubscribeAll),
        filter((team: Team) => team !== undefined),
        // Get All Team info - team member and problem support
        switchMap((team: Team) => this._teamService.getTeam(team.id)),
      );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  onTeamDelete(id: string): void {
    this._teamService.delete(id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(_ => this.del.emit(undefined));
  }

}
