import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Criticality } from 'app/core/criticality/criticality.types';

@Component({
  selector: 'app-criticality-list',
  templateUrl: './criticality-list.component.html',
  styleUrls: ['./criticality-list.component.scss']
})
export class CriticalityListComponent implements OnInit {

  @Output() selectCriticality = new EventEmitter<Criticality>();

  @Output() edit = new EventEmitter<Criticality>();
  @Output() del = new EventEmitter<Criticality>();

  timeMock: any[];

  constructor() { }

  ngOnInit(): void {

    this.timeMock = [
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
      {
        totalPeriod: '10 H',
        acknowledgeTime: '10 H',
        processTime: '20 H',
        color:'#C42A2E',
        name:'Critical'
      },
    ]
  }

  onDetail(critical: any): void {
    console.log(critical);
    this.selectCriticality.emit(critical);
  }
}
