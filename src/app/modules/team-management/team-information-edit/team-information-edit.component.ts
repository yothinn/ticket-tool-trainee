import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamService } from 'app/core/team/team.service';
import { Observable, of, Subject } from 'rxjs';
import { ProblemDialogComponent } from '../dialogs/problem-dialog/problem-dialog.component';
import { TeamMemberDialogComponent } from '../dialogs/team-member-dialog/team-member-dialog.component';

@Component({
  selector: 'app-team-information-edit',
  templateUrl: './team-information-edit.component.html',
  styleUrls: ['./team-information-edit.component.scss']
})
export class TeamInformationEditComponent implements OnInit, OnDestroy, OnChanges {

  @Input() mode: 'create' | 'edit' = 'create';

  @Output() closed = new EventEmitter<boolean>();

  activeTeam$: Observable<any> = of({});

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _dialog: MatDialog,
    private _teamService: TeamService,
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mode);
    this.activeTeam$ = (this.mode === 'create') ? of(undefined) : this._teamService.activeTeam$;
  }

  openTeamMemberDialog(): void {
    const dialogRef = this._dialog.open(TeamMemberDialogComponent, {
      height:'580px',
      width: '90%',
      disableClose: true,
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openProblemDialog(): void {
    const dialogRef = this._dialog.open(ProblemDialogComponent, {
      height:'580px',
      width: '90%',
      disableClose: true,
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onCreateCancel(): void {
    this.closed.emit(false);
  }

  onCreateSave(): void {
    this.closed.emit(true);
  }

  onEditCancel(): void {
    this.closed.emit(false);
  }

  onEditSave(): void {
    this.closed.emit(true);
  }

}
