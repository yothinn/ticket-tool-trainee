import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {

  @Output() workingDays = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    const playload = this.workingDays;
    console.log(playload);
  }
}