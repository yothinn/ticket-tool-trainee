import { FuseNavigationItem } from '@fuse/components/navigation';

export const raiserNavigation = ['myTicket'];
export const dispatcherNavigation = ['dashboard', 'myTicket', 'ticketManagement'];
export const ownerNavigation = ['dashboard', 'myTicket', 'ticketManagement'];

export const defaultNavigation: FuseNavigationItem[] = [

    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'home',
        link : '/dashboard'
    },
    {
        id   : 'reports',
        title: 'Reports',
        type : 'basic',
        icon : 'report',
        link : '/reports'
    },
    {
        id   : 'myTicket',
        title: 'My Ticket',
        type : 'basic',
        icon : 'myticket',
        link : '/myticket'
    },
    {
        id   : 'ticketManagement',
        title: 'Ticket Management',
        type : 'basic',
        icon : 'ticket',
        link : '/ticket-management'
    },
    {
        id   : 'problemManagement',
        title: 'Problem Management',
        type : 'collapsable',
        icon : 'problem',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'problem',
                title: 'Problem',
                type : 'basic',
                icon : '',
                link : '/problem-management/problem'
            },
            {
                id   : 'problemCategory',
                title: 'Problem Category',
                type : 'basic',
                icon : '',
                link : '/problem-management/problem-category'
            },
            {
                id   : 'problemCause',
                title: 'Problem Cause',
                type : 'basic',
                icon : '',
                link : '/problem-management/problem-cause'
            },
            {
                id   : 'requestData',
                title: 'Request Data',
                type : 'basic',
                icon : '',
                link : '/problem-management/request-data',
            }
        ]
    },
    {
        id   : 'teamManagement',
        title: 'Team Management',
        type : 'basic',
        icon : 'team',
        link : '/team-management'
    },
    {
        id   : 'slaManagement',
        title: 'SLA Management',
        type : 'collapsable',
        icon : 'sla',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'criticality',
                title: 'Criticality',
                type : 'basic',
                icon : '',
                link : '/sla-management/criticality'
            },
            {
                id   : 'workingDayTime',
                title: 'Working Day&Time',
                type : 'basic',
                icon : '',
                link : '/sla-management/workingDay'
            },
            {
                id   : 'holiday',
                title: 'Holiday',
                type : 'basic',
                icon : '',
                link : '/sla-management/holiday'
            }
        ]
    },
    {
        id   : 'userManagement',
        title: 'User Management',
        type : 'collapsable',
        icon : 'user_management',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'userPermission',
                title: 'User Permission',
                type : 'basic',
                icon : '',
                link : '/user-management/permission'
            },
            {
                id   : 'userGroup',
                title: 'User Group',
                type : 'basic',
                icon : '',
                link : '/user-management/usergroup'
            }
        ]
    },
    // {
    //     id   : 'profile',
    //     title: 'Profile',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/profile'
    // },

];


export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
