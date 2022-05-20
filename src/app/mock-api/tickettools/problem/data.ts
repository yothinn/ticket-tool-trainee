/* eslint-disable */
import { Problem } from 'app/core/problem/problem.types';
import { TeamStatus } from 'app/core/team/team-status.enum';
import * as moment from 'moment';

export const problems: Problem[] = [
    {
        id: '0001',
        name: 'Problem Name1222222222',
        description: 'Problem Name DescriptionProblem Name DescriptionProblem Name DescriptionProblem Name DescriptionProblem Name DescriptionProblem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

        criticality: {
            id: '',
            name: 'Critical',
            color: '#C42A2E',
            totalPeriod: '4 Hrs',
            acknowledgeTime: '4 Hrs',
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
    {
        id: '0002',
        name: 'Problem Name2',
        description: 'Problem Name Description Description Description',
        category: {
            id:'002',
            name:'Order',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team B',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

        criticality: {
            id: '',
            name: 'Critical',
            color: '#C42A2E',
            totalPeriod: '5 Hrs',
            acknowledgeTime: '5 Hrs',
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
    {
        id: '0003',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0004',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0005',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'inactive',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0006',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'inactive',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0007',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'inactive',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0008',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '0009',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '00010',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    {
        id: '00011',
        name: 'Problem Name1',
        description: 'Problem Name Description',
        category: {
            id:'001',
            name:'System',
            createdAt: new Date('2022-04-25'),
            createBy: 'Thanachai',
            updatedAt: new Date('2022-04-25'),
            updateBy: 'Thanachai'
        },
        status:'active',
        teamOwner:{
            id: '001',
            name: 'Team A',
            description: '',
            contactName: '',
            contactEmail: '',
            contactMobile: '',
            status: TeamStatus.active,
        
            members: [{
                id: '',
                firstName: 'Thanachai',
                lastName: 'Thanachai',
                email: 'Thanachai',

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
        // teamOwner:'',

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
    
];

