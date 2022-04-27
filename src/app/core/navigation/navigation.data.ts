import { FuseNavigationItem } from '@fuse/components/navigation';

export const raiserNavigation = ['myTicket'];
export const dispatcherNavigation = ['dashboard', 'myTicket', 'ticketManagement'];
export const ownerNavigation = ['dashboard', 'myTicket', 'ticketManagement'];

export const defaultNavigation: FuseNavigationItem[] = [

    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'reports',
        title: 'Reports',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/reports'
    },
    {
        id   : 'myTicket',
        title: 'My Ticket',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/ticket/myticket'
    },
    {
        id   : 'ticketManagement',
        title: 'Ticket Management',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/ticket/ticket-management'
    },
    {
        id   : 'problemManagement',
        title: 'Problem Management',
        type : 'collapsable',
        icon : 'heroicons_outline:chart-pie',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'problem',
                title: 'Problem',
                type : 'basic',
                icon : '',
                link : '/system/problem-management'
            },
            {
                id   : 'problemCategory',
                title: 'Problem Category',
                type : 'basic',
                icon : '',
                link : '/system/problem-category'
            },
            {
                id   : 'problemCause',
                title: 'Problem Cause',
                type : 'basic',
                icon : '',
                link : '/system/problem-cause'
            },
            {
                id   : 'requestData',
                title: 'Request Data',
                type : 'basic',
                icon : '',
                link : '',
            }
        ]
    },
    {
        id   : 'slaManagement',
        title: 'SLA Management',
        type : 'collapsable',
        icon : 'heroicons_outline:chart-pie',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'criticality',
                title: 'Criticality',
                type : 'basic',
                icon : '',
                link : ''
            },
            {
                id   : 'workingDayTime',
                title: 'Working Day&Time',
                type : 'basic',
                icon : '',
                link : ''
            },
            {
                id   : 'holiday',
                title: 'Holiday',
                type : 'basic',
                icon : '',
                link : ''
            }
        ]
    },
    {
        id   : 'teamManagement',
        title: 'Team Management',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/system/team-management'
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
