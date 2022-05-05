import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Problem } from 'app/core/problem/problem.types';

@Component({
  selector: 'app-problem-info-edit',
  templateUrl: './problem-info-edit.component.html',
  styleUrls: ['./problem-info-edit.component.scss']
})
export class ProblemInfoEditComponent implements OnInit, OnChanges {

  @Input() problem: Problem;

  infoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.infoForm = this.initInfoForm(this.problem);
  }

  initInfoForm(problem?: Problem): FormGroup {
    return this._formBuilder.group({
      name: [problem?.name || '', Validators.required],
      description: [problem?.description || '', Validators.required]
    });
  }

}
