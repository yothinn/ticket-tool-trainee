import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { ProblemStatus } from 'app/core/problem/problem-status.enum';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-problem-information-view',
  templateUrl: './problem-information-view.component.html',
  styleUrls: ['./problem-information-view.component.scss']
})
export class ProblemInformationViewComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  activeProblem$: Observable<Problem> = this._problemService.activeProblem$;

  problemStatus = ProblemStatus;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _problemService: ProblemService,
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
