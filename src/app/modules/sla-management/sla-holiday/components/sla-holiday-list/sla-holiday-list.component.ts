import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from 'app/core/holiday/holiday.types';

@Component({
  selector: 'app-sla-holiday-list',
  templateUrl: './sla-holiday-list.component.html',
  styleUrls: ['./sla-holiday-list.component.scss']
})
export class SlaHolidayListComponent implements OnInit {

  @Input() holidays?: Holiday[];

  @Output() edit = new EventEmitter<any>();

  @Output() selected = new EventEmitter<any>();
  dateMock: any[];

  constructor() { }

  // ngOnInit(): void {
    
  //   console.log(this.holidays);
  // }

//   onSelectEdit(holiday: Holiday, index: number): void {
//     this.edit.emit({
//       index: index,
//       holidays: holiday
//     });
//   }
// }
  ngOnInit(): void {
    this.dateMock = [
      {
        name: 'H01',
        date: '30/03/2022',
        custom: 'Whole Day',
        hours: '08.30'
      },
      {
        name: 'H02',
        date: '30/03/2022',
        custom: 'Custom',
        hours: '08.30'
      },
      {
        name: 'H03',
        date: '30/03/2022',
        custom: 'Custom',
        hours: '08.30'
      },
      {
        name: 'H04',
        date: '30/03/2022',
        custom: 'Custom',
        hours: '08.30'
      },
      {
        name: 'H05',
        date: '30/03/2022',
        custom: 'Custom',
        hours: '08.30'
      },
    ]
  }

  onDetail(item: any): void {
    console.log(item);
    this.selected.emit(item);
  }
}
  
