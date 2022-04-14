import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-card-list',
  templateUrl: './ticket-card-list.component.html',
  styleUrls: ['./ticket-card-list.component.scss']
})
export class TicketCardListComponent implements OnInit {

  @Output() selectTeam = new EventEmitter<any>();

  dateMock: any[];

  constructor() { }

  ngOnInit(): void {
    this.dateMock = [
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
      {
        teamName: 'Team Name1',
        teamDiscription: 'Team Name Description',
        status: 'Active',
        created: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        },
        updated: {
          date: '10/09/2022',
          firstName: 'Test1',
          lastName: 'Test2'
        }
      },
    ];
  }

  onDetail(item: any): void {
    console.log(item);
    this.selectTeam.emit(item);
  }

}
