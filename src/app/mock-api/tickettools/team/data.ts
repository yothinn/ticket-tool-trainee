/* eslint-disable */
import { TeamStatus } from 'app/core/team/team-status.enum';
import { Team } from 'app/core/team/team.types';
import * as moment from 'moment';

export const teams: Team[] = [
    {
        id: 'TM00000001',
        name: 'Team Name 1',
        description: 'Description 123456789 description description description description description description description description description description description description description description description description description description description description description description description description ',
        contactName: 'teamFirstName1 teamLastName',
        contactEmail: 'team@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [
            {
                id: '',
                firstName: 'test',
                lastName: 'test1',
                email: 'test@ais.co.th',

                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',
                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            }
        ],

        problems: [
            {
                id: '0001',
                name: 'Problem Name1',
                description: 'Problem Name Description',
                status:'active',

                category: {
                    id:'ddd',
                    name:'dd',
                    createdAt: new Date('2022-04-25'),
                    createBy: 'Thanachai',
                    updatedAt: new Date('2022-04-25'),
                    updateBy: 'Thanachai'
                },
                teamOwner:{
                    id: '',
                    name: '',
                    description: '',
                    contactName: '',
                    contactEmail: '',
                    contactMobile: '',
                    status: TeamStatus.active,
                
                    members: [{
                        id: '',
                        firstName: '',
                        lastName: '',
                        email: '',

                        createdAt: new Date('2022-04-25'),
                        createBy: 'Thanachai',
                        updatedAt: new Date('2022-04-25'),
                        updateBy: 'Thanachai'
                    }],
                    createdAt: new Date('2022-04-25'),
                    createBy: 'Thanachai',
                    updatedAt: new Date('2022-04-25'),
                    updateBy: 'Thanachai'
        
                },
                criticality: {
                    id: '',
                    name: 'Critical',
                    color: '#C42A2E',
                    totalPeriod: '',
                    acknowledgeTime: '',
                    processTime: '',
        
                    createdAt: new Date('2022-04-25'),
                    createBy: 'Thanachai',
                    updatedAt: new Date('2022-04-25'),
                    updateBy: 'Thanachai'
                },
        
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',
                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            
        ],

        createdAt: new Date('2022-04-25'),
        createBy: 'user1 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user1 user'
    },
    {
        id: 'TM00000002',
        name: 'Team Name 2',
        description: 'Description 123456789',
        contactName: 'teamFirstName2 teamLastName',
        contactEmail: 'team@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.inActive,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user2 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user2 user'
    },
    {
        id: 'TM00000003',
        name: 'Team Name 3',
        description: 'Description 123456789',
        contactName: 'teamFirstName3 teamLastName',
        contactEmail: 'team3@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user3 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user3 user'
    },
    {
        id: 'TM00000004',
        name: 'Team Name 4',
        description: 'Description 123456789',
        contactName: 'teamFirstName4 teamLastName',
        contactEmail: 'team4@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user4 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user4 user'
    },
    {
        id: 'TM00000005',
        name: 'Team Name 5',
        description: 'Description 123456789',
        contactName: 'teamFirstName5 teamLastName',
        contactEmail: 'team5@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user5 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user5 user'
    },
    {
        id: 'TM00000006',
        name: 'Team Name 6',
        description: 'Description 123456789',
        contactName: 'teamFirstName6 teamLastName',
        contactEmail: 'team@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user6 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user6 user'
    },
    {
        id: 'TM00000007',
        name: 'Team Name 7',
        description: 'Description 123456789',
        contactName: 'teamFirstName7 teamLastName',
        contactEmail: 'team7@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user7 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user7 user'
    },
    {
        id: 'TM00000008',
        name: 'Team Name 8',
        description: 'Description 123456789',
        contactName: 'teamFirstName8 teamLastName',
        contactEmail: 'team8@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user8 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user8 user'
    },
    {
        id: 'TM00000009',
        name: 'Team Name 9',
        description: 'Description 123456789',
        contactName: 'teamFirstName9 teamLastName',
        contactEmail: 'team9@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user9 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user9 user'
    },
    {
        id: 'TM00000010',
        name: 'Team Name 10',
        description: 'Description 123456789',
        contactName: 'teamFirstName10 teamLastName',
        contactEmail: 'team10@ais.co.th',
        contactMobile: '012356789',
        status: TeamStatus.active,
        members: [],

        createdAt: new Date('2022-04-25'),
        createBy: 'user10 user',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'user10 user'
    },
];
