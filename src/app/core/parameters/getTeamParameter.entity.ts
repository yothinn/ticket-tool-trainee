import { TeamStatus } from '../team/team-status.enum';
import { SearchParameter } from './searchParameter.entity';

export class GetTeamParameter extends SearchParameter {
    public status?: TeamStatus;

    constructor() {
        super();
    }
}
