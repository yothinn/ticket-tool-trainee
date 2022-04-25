import { BaseInterface } from '../base/baseInterface.types';
import { TeamMember } from './teamMember.types';

export interface Team extends BaseInterface {
    id: string;
    name: string;
    description: string;
    contactName: string;
    contactEmail: string;
    contactMobile: string;

    members?: TeamMember[];
}
