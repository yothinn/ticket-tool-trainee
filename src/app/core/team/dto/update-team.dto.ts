import { ConnectMemberDto } from './connect-member.dto';
import { CreateTeamDto } from './create-team.dto';

export interface UpdateTeamDto extends CreateTeamDto {
    disconnectMembers?: ConnectMemberDto[];
}
