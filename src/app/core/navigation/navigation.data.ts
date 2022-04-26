import { FuseNavigationItem } from '@fuse/components/navigation';

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
        id   : 'my-ticket',
        title: 'My Ticket',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/ticket/myticket'
    },
    {
        id   : 'ticket-management',
        title: 'Ticket Management',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/ticket/ticket-management'
    },
    {
        id   : 'problem-management',
        title: 'Problem Management',
        type : 'collapsable',
        icon : 'heroicons_outline:chart-pie',
        // link : '/system/problem-management',
        children: [
            {
                id   : 'Problem',
                title: 'Problem',
                type : 'basic',
                icon : '',
                link : '/system/problem-management'
            },
            {
                id   : 'Problem-Category',
                title: 'Problem Category',
                type : 'basic',
                icon : '',
                link : '/system/problem-category'
            },
            {
                id   : 'Problem-Cause',
                title: 'Problem Cause',
                type : 'basic',
                icon : '',
                link : '/system/problem-cause'
            },
            {
                id   : 'Request-Data',
                title: 'Request Data',
                type : 'basic',
                icon : '',
                link : '',
               
            }
        ]
    },
    {
        id   : 'sla-management',
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
                id   : 'working-day-time',
                title: 'Working-Day-Time',
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
        id   : 'team-management',
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