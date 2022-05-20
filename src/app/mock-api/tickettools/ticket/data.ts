/* eslint-disable */
import { TeamStatus } from 'app/core/team/team-status.enum';
import { Ticket } from 'app/core/ticket/ticket.types';
import * as moment from 'moment';

export const tickets: Ticket[] = [
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description Problem Description Problem Description Problem Description Problem Description Problem Description Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000002',
        problemId: 'PBI0002',
        problem: {
            id: 'PB0002',
            name: 'Problem Name2',
            description: 'Problem Description2',
            category: {
                id: 'CT00002',
                name: 'Product Problem 2',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0002',
                name: 'teamOwner 2',
                description: 'TeamOwner Description 2',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '5Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    {
        id: 'TK000001',
        problemId: 'PBI0001',
        problem: {
            id: 'PB0001',
            name: 'Problem Name',
            description: 'Problem Description',
            category: {
                id: 'CT00001',
                name: 'Product Problem',
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            status: 'Assigned',
            teamOwner: {
                id: 'TO0001',
                name: 'teamOwner 1',
                description: 'TeamOwner Description',
                contactName: 'Thanachai',
                contactEmail: 'Thanachai@gmail.com',
                contactMobile: '0123456789',
                status: TeamStatus.active,
                createdAt: new Date('2022-04-25'),
                createBy: 'Thanachai',

                updatedAt: new Date('2022-04-25'),
                updateBy: 'Thanachai'
            },
            // teamOwner:string;

            criticality: {
                id: 'criticality Id',
                name: 'criticality',
                color: '#C42A2E',
                totalPeriod: '',
                acknowledgeTime: '4Hrs',
                processTime: 'Thanachai',
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
        createdAt: new Date('2022-04-25'),
        createBy: 'Thanachai',

        updatedAt: new Date('2022-04-25'),
        updateBy: 'Thanachai'
    },
    // ,
    // {
    //     id: '0001',
    //     problemId: '',
    //     problem: '',
    //     createdAt: new Date('2022-04-25'),
    //     createBy: '',

    //     updatedAt: new Date('2022-04-25'),
    //     updateBy: ''
    // }
];
