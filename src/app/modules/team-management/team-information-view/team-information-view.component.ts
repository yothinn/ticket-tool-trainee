import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-team-information-view',
  templateUrl: './team-information-view.component.html',
  styleUrls: ['./team-information-view.component.scss']
})
export class TeamInformationViewComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<any>();

  activeTeam$: Observable<Team> = this._teamService.activeTeam$;

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

}
