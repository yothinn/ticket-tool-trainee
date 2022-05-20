import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-working-week',
  templateUrl: './working-week.component.html',
  styleUrls: ['./working-week.component.scss']
})
export class WorkingWeekComponent implements OnInit {

  @Output() workingDayThpes = new EventEmitter<any>();

  dayTypes: {name: string; hasValue: boolean}[] = [
    {name: 'monday', hasValue: false },
    {name: 'tuesday', hasValue: false},
    {name: 'wednesday', hasValue: false},
    {name: 'thursday', hasValue: false},
    {name: 'friday', hasValue: false},
    {name: 'saturday', hasValue: false},
    {name: 'sunday', hasValue: false}
  ];

  workingTypes: {
    startTime?: string;
    endTime?: string;
  }
    workingDay?: FormGroup;

  constructor( 
    private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // this.workingDay = this.initWorkingday(this.workingTypes);
    // console.log(this.workingTypes);
  }

  // initWorkingday(workingTypes?: any): FormGroup {
  //   return this._formBuilder?.group({
  //     day: [this.dayTypes || '',  Validators.required],
  //     startTime: [workingTypes?.startTime || '',  Validators.required],
  //     endTime: [workingTypes?.endTime || '',  Validators.required] 
  //   });

  // }
 
}