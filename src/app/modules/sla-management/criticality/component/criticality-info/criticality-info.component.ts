import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Criticality } from 'app/core/criticality/criticality.types';
import { Holiday } from 'app/core/holiday/holiday.types';


@Component({
  selector: 'app-criticality-info',
  templateUrl: './criticality-info.component.html',
  styleUrls: ['./criticality-info.component.scss']
})
export class CriticalityInfoComponent implements OnInit {

  @Output() edit = new EventEmitter<Criticality>();
  @Output() del = new EventEmitter<Criticality>();

  criticalityForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  // onSelectEdit(holiday: Holiday): void {
  //   this.edit.emit(holiday);
  // };

  // onSelectDelete(holiday: Holiday): void {
  //   this.del.emit(holiday);
  // };
}
