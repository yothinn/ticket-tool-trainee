import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criticality } from 'app/core/criticality/criticality.types';


@Component({
  selector: 'app-criticality-info',
  templateUrl: './criticality-info.component.html',
  styleUrls: ['./criticality-info.component.scss']
})
export class CriticalityInfoComponent implements OnInit, OnChanges {

  @Input() criticality?: Criticality;

  @Output() edit = new EventEmitter<Criticality>();
  @Output() del = new EventEmitter<Criticality>();

  // name = new FormControl('', Validators.required);

  criticalityForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.criticalityForm = this.initCriticalityForm(this.criticality);
  }

  initCriticalityForm(critical?: Criticality): FormGroup {
    return this._formBuilder.group({
      total: [critical?.totalPeriod || '', Validators.required],
      acknow: [critical?.acknowledgeTime || '', Validators.required],
      process: [critical?.processTime || '', Validators.required]
    })
  };

  // onSelectEdit(critical: Criticality): void {
  //   this.edit.emit(critical);
  // };

  // onSelectDelete(critical: Criticality): void {
  //   this.del.emit(critical);
  // };
}
