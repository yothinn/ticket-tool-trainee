import { BaseInterface } from '../base/baseInterface.types';
import { Problem } from '../problem/problem.types';
import { TeamMember } from './teamMember.types';

export interface Team extends BaseInterface {
    id: string;
    name: string;
    description: string;
    contactName: string;
    contactEmail: string;
    contactMobile: string;
    status: string;

    members?: TeamMember[];
    problems?: Problem[];
}
