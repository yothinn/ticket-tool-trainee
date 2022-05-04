import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'app/core/ticket/ticket.types';

@Component({
  selector: 'app-my-ticket-card-list',
  templateUrl: './my-ticket-card-list.component.html',
  styleUrls: ['./my-ticket-card-list.component.scss']
})
export class MyTicketCardListComponent implements OnInit {

  @Input() tickets: Ticket[];
  @Input() activeTicket?: Ticket;
  
  @Output() selected = new EventEmitter<any>();

  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    this.dateMock = [
      {
        myTicketTk: 'TK0000000001',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 1',
        myTicketCat: 'Product Problem',
        status: {
        data: 'Created',
        Name: 'Status'
      },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Opened'
        }
      },
      {
        myTicketTk: 'TK0000000002',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 2',
        myTicketCat: 'Other Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Waited to approne'
        }
      },
      {
        myTicketTk: 'TK0000000003',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 3',
        myTicketCat: 'Network Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Assigned'
        }
      },
      {
        myTicketTk: 'TK0000000004',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 4',
        myTicketCat: 'Product Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'On process'
        }
      },
      {
        myTicketTk: 'TK0000000005',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 5',
        myTicketCat: 'Other Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Opened'
        }
      },
      {
        myTicketTk: 'TK0000000006',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 6',
        myTicketCat: 'Network Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Waited to approne'
        }
      },
      {
        myTicketTk: 'TK0000000007',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 7',
        myTicketCat: 'Product Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Assigned'
        }
      },
      {
        myTicketTk: 'TK0000000008',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 8',
        myTicketCat: 'Product Problem',
        status: {
          data: 'Created',
          firstName: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          firstName: 'On process'
        }
      },
      {
        myTicketTk: 'TK0000000009',
        myTicketCategcry: 'Categcry',
        myTicketName: 'Ticket Problem Name 9',
        myTicketCat: 'Product Problem',
        status: {
          data: 'Created',
          Name: 'Status'
        },
        created: {
          date: '10 Mar 2022 20:00',
          Name: 'Opened'
        }
      },
    ];
  }

  onDetail(item: any): void {
    console.log(item);
    this.selected.emit(item);
  }
}
