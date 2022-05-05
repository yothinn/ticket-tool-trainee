import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-management-view',
  templateUrl: './ticket-management-view.component.html',
  styleUrls: ['./ticket-management-view.component.scss']
})
export class TicketManagementViewComponent implements OnInit {

  @Output() closed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit(undefined);
  }

}
