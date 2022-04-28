import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-card-list',
  templateUrl: './team-card-list.component.html',
  styleUrls: ['./team-card-list.component.scss']
})
export class TeamCardListComponent implements OnInit {

  @Input() teams?: Team[];
  @Input() activeTeam?: Team;

  @Output() selected = new EventEmitter<any>();

  teamDataMocks: any[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.teams);

    this.teamDataMocks = [
      {
        teamName: 'Team Name1',
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
        teamDescription: 'Team Name Description',
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
    this.selected.emit(item);
  }

}
