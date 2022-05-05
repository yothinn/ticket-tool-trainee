import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  @Input() holidays?: Holiday[];

  @Output() edit = new EventEmitter<any>();
  @Output() del = new EventEmitter<Holiday>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.holidays)
  }

  onSelectEdit(holiday: Holiday): void {
    this.edit.emit({
      holidays: holiday
    });
  }
}
