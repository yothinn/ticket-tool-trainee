import { BaseInterface } from '../base/baseInterface.types';
import { Problem } from '../problem/problem.types';
import { User } from '../user/user.types';
import { TeamStatus } from './team-status.enum';

export interface Team extends BaseInterface {
    id: string;
    name: string;
    description?: string;
    contactName?: string;
    contactEmail?: string;
    contactMobile?: string;
    status: TeamStatus;

    members?: User[];
    problems?: Problem[];
}
