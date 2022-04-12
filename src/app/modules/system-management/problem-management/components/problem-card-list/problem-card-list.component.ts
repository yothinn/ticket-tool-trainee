import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-card-list',
  templateUrl: './problem-card-list.component.html',
  styleUrls: ['./problem-card-list.component.scss']
})
export class ProblemCardListComponent implements OnInit {
  @Output() selectPageEventChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any){
    // console.log(event)
    this.selectPageEventChanged.emit(event);
  }
}
