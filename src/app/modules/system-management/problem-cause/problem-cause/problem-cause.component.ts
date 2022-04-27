import { Component, OnInit } from '@angular/core';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetProblemCauseParameter } from 'app/core/parameters/getProblemCauseParameter.entity';
import { ProblemCauseService } from 'app/core/problem-cause/problem-cause.service';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-problem-cause',
  templateUrl: './problem-cause.component.html',
  styleUrls: ['./problem-cause.component.scss']
})
export class ProblemCauseComponent implements OnInit {

  problemCauseResponse$?: Observable<PageResponse<ProblemCause[]>>;

  constructor(
    private _problemCauseService: ProblemCauseService
  ) {
    this.getProblemCauses();
  }

  ngOnInit(): void {
  }

  getProblemCauses(): void {
    const params = new GetProblemCauseParameter();

    this.problemCauseResponse$ = this._problemCauseService.getProblemCauses(params);
  }

}
