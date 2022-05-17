import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.component.html',
  styleUrls: ['./working-day.component.scss']
})
export class WorkingDayComponent implements OnInit {

    workingMonth?: FormGroup;

  constructor(day: FormBuilder) { 
    this.workingMonth = day.group({
        pepperoni: false,
        extracheese: false,
        mushroom: false,
     });
  }

  ngOnInit(): void {
  }

}