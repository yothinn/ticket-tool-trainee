import { Team } from '../team.types';
import { ConnectMemberDto } from './connect-member.dto';

export interface CreateTeamDto extends Omit<Team, 'id' | 'members' | 'problems' | 'createdAt' | 'createBy' | 'updatedAt' | 'updateBy'> {
    connectMembers?: ConnectMemberDto[];
}
