import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-holiday-info',
  templateUrl: './holiday-info.component.html',
  styleUrls: ['./holiday-info.component.scss']
})
export class HolidayInfoComponent implements OnInit {

  @Input() holiday: Holiday;

  @Output() edit = new EventEmitter<Holiday>();
  @Output() del = new EventEmitter<Holiday>();

  constructor() { }

  ngOnInit(): void {

  }
}
