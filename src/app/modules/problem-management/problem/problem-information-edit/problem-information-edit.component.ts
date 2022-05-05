import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { ProblemStatus } from 'app/core/problem/problemStatus.enum';
import { Observable, of, Subject, tap } from 'rxjs';
import { TeamOwnerDialogComponent } from '../dialogs/team-owner-dialog/team-owner-dialog.component';

@Component({
  selector: 'app-problem-information-edit',
  templateUrl: './problem-information-edit.component.html',
  styleUrls: ['./problem-information-edit.component.scss']
})
export class ProblemInformationEditComponent implements OnInit, OnDestroy, OnChanges {

  @Input() mode: 'create' | 'edit' = 'create';

  @Output() closed = new EventEmitter<boolean>();

  isActiveStatus: boolean = false;
  activeProblem$: Observable<any> = of({});

  requestData: string[] = ['Ticket Description','Order No','Attachment file','XXXXXXX','XXXXXXXX'];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _dialog: MatDialog,
    private _problemService: ProblemService,
  ) { }

  get isCreateMode(): boolean {
    return this.mode === 'create';
  }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mode);

    if (this.isCreateMode) {
      this.activeProblem$ = of(undefined);
    } else {
      this.activeProblem$ = this._problemService.activeProblem$
        .pipe(
          tap((problem: Problem) => this.isActiveStatus = (problem.status === ProblemStatus.active) )
        );
    }
  }

  openTeamOwnerDialog(): void{
    const dialogRef = this._dialog.open(TeamOwnerDialogComponent, {
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
