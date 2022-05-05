import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { TeamStatus } from 'app/core/team/teamStatus.enum';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-team-information-view',
  templateUrl: './team-information-view.component.html',
  styleUrls: ['./team-information-view.component.scss']
})
export class TeamInformationViewComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  activeTeam$: Observable<Team> = this._teamService.activeTeam$;
  teamStatus = TeamStatus;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _teamService: TeamService
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  onClose(): void {
    this.closed.emit(undefined);
  }

  onEdit(): void {
    this.edit.emit(undefined);
  }

}
