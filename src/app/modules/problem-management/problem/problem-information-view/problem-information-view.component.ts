import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProblemService } from 'app/core/problem/problem.service';
import { Problem } from 'app/core/problem/problem.types';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-problem-information-view',
  templateUrl: './problem-information-view.component.html',
  styleUrls: ['./problem-information-view.component.scss']
})
export class ProblemInformationViewComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<any>();
  activeProblems$: Observable<Problem> = this._problemService.activeProblem$;

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
}
