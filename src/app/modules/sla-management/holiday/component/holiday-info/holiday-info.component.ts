import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-holiday-info',
  templateUrl: './holiday-info.component.html',
  styleUrls: ['./holiday-info.component.scss']
})
export class HolidayInfoComponent implements OnInit {

  @Input() holiday: Holiday;
  @Input() mode: 'edit' | 'view' = 'view';

  @Output() edit = new EventEmitter<Holiday>();

  constructor() { }

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  get isViewMode(): boolean {
    return this.mode === 'view';
  }

  ngOnInit(): void {
    console.log(this.holiday)
  }

  onSelectEdit(holiday: Holiday): void {
    this.edit.emit(holiday);
  }
}
