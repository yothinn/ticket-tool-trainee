import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-sla-holiday-info',
  templateUrl: './sla-holiday-info.component.html',
  styleUrls: ['./sla-holiday-info.component.scss']
})
export class SlaHolidayInfoComponent implements OnInit {

  @Input() holiday: Holiday;

  @Output() edit = new EventEmitter<Holiday>();

  @Input() holidayData?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectEdit(holiday: Holiday): void {
    this.edit.emit(holiday);
  }

}
