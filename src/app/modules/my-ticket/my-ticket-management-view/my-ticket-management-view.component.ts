import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-ticket-management-view',
  templateUrl: './my-ticket-management-view.component.html',
  styleUrls: ['./my-ticket-management-view.component.scss']
})
export class MyTicketManagementViewComponent implements OnInit {
  @Output() closed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit(undefined);
  }

}
