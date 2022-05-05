import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-control-edit',
  templateUrl: './problem-control-edit.component.html',
  styleUrls: ['./problem-control-edit.component.scss']
})
export class ProblemControlEditComponent implements OnInit, OnChanges {

  @Input() problem: Problem;

  controlForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.controlForm = this.initControlForm(this.problem);
  }

  initControlForm(problem?: Problem): FormGroup {
    return this._formBuilder.group({
      // name: [problem?.name || '', Validators.required],
      // description: [problem?.description || '', Validators.required]
    });
  }

}
