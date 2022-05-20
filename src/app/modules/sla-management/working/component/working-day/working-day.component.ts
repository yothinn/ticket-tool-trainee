import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkingWeekComponent } from '../working-week/working-week.component';

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.component.html',
  styleUrls: ['./working-day.component.scss']
})
export class WorkingDayComponent implements OnInit {

  @Input() dayTypes: any;

  // @Output() workingDayThpes = new EventEmitter<WorkingWeekComponent>();

  workingDayForm?: FormGroup;

  // workingDay = new FormControl('');

  constructor(
    private _formBuilder: FormBuilder

    ) {}

  ngOnInit(): void {
  }

  onChangeDayType(event: any): void{

    const dayTypes = this.dayTypes.find((value: any) => value.name === event.value);
    this.dayTypes = dayTypes.hasValue;

    console.log(this.dayTypes);
  }

  initWorkingday(dayTypes?: any): FormGroup {
    return this._formBuilder?.group({
      day: [dayTypes?.name || '',  Validators.required],
      // startTime: [workingTypes?.startTime || '',  Validators.required],
      // endTime: [workingTypes?.endTime || '',  Validators.required] 
    });

  }

  


}