import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Problem } from 'app/core/problem/problem.types';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { TeamStatus } from 'app/core/team/team-status.enum';
import { Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { ProblemDialogComponent } from '../dialogs/problem-dialog/problem-dialog.component';
import { TeamMemberDialogComponent } from '../dialogs/team-member-dialog/team-member-dialog.component';
import { TeamInfoEditComponent } from '../components/team-info-edit/team-info-edit.component';
import { TeamContactEditComponent } from '../components/team-contact-edit/team-contact-edit.component';
import { CreateTeamDto } from 'app/core/team/dto/create-team.dto';
import { UpdateTeamDto } from 'app/core/team/dto/update-team.dto';

@Component({
  selector: 'app-team-information-edit',
  templateUrl: './team-information-edit.component.html',
  styleUrls: ['./team-information-edit.component.scss']
})
export class TeamInformationEditComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('teamInfoComp') teamInfoComp: TeamInfoEditComponent;
  @ViewChild('teamContactComp') teamContactComp: TeamContactEditComponent;

  @Input() mode: 'create' | 'edit' = 'create';

  @Output() closed = new EventEmitter<boolean>();

  isActiveStatus: boolean = false;
  activeTeam$: Observable<any> = of({});

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _dialog: MatDialog,
    private _teamService: TeamService,
  ) { }

  get isCreateMode(): boolean {
    return this.mode === 'create';
  }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  get teamStatus(): TeamStatus {
    return this.isActiveStatus ? TeamStatus.active : TeamStatus.inActive;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.isCreateMode) {
      this.activeTeam$ = of(undefined);
    } else {
      this.activeTeam$ = this._teamService.activeTeam$
        .pipe(
          tap((team: Team) => this.isActiveStatus = (team.status === TeamStatus.active) )
        );
    }
  }

  openTeamMemberDialog(team?: Team): void {
    const dialogRef = this._dialog.open(TeamMemberDialogComponent, {
      height:'580px',
      width: '90%',
      disableClose: true,
      data: {
        team: team
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openProblemDialog(team?: Team): void {
    const dialogRef = this._dialog.open(ProblemDialogComponent, {
      height:'580px',
      width: '90%',
      disableClose: true,
      data: {
        team: team
      },
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
    const teamInfo = this.teamInfoComp.getTeamInfo();
    const teamContact = this.teamContactComp.getTeamContact();

    const createDto: CreateTeamDto = {
      ...teamInfo,
      ...teamContact,
      status: this.teamStatus,
    };

    this._teamService.create(createDto)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(_ => this.closed.emit(true));
  }

  onEditCancel(): void {
    this.closed.emit(false);
  }

  onEditSave(id: string): void {
    const teamInfo = this.teamInfoComp.getTeamInfo();
    const teamContact = this.teamContactComp.getTeamContact();

    const updateDto: UpdateTeamDto = {
      ...teamInfo,
      ...teamContact,
      status: this.teamStatus,
    };

    this._teamService.update(id, updateDto)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(_ => this.closed.emit(true));

  }

  onDelTeamMember(event: any): void {
    if (this.isCreateMode) {
      // Delete only local
    } else {
      // Delete to backend
    }

  }

  onDelProblem(info: {index: number; problem: Problem}): void {
    if (this.isCreateMode) {
      // Delete only local
    } else {
      // Delete to backend
    }
  }

}
