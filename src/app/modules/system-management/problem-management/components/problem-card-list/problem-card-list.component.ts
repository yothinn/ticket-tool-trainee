import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-card-list',
  templateUrl: './problem-card-list.component.html',
  styleUrls: ['./problem-card-list.component.scss']
})
export class ProblemCardListComponent implements OnInit {

  @Output() selectProblemItem = new EventEmitter<any>();

  problemDataMocks: any[];

  constructor() { }

  ngOnInit(): void {
    this.problemDataMocks = [
      {
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
        problemName: 'Problem Name1',
        problemDescription: 'Problem Name Description',
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
    this.selectProblemItem.emit(item);
  }
}
