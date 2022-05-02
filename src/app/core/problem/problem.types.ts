import { BaseInterface } from '../base/baseInterface.types';
import { Criticality } from '../criticality/criticality.types';
import { ProblemCategory } from '../problem-category/problem-category.types';
import { Team } from '../team/team.types';

export interface Problem extends BaseInterface{
    id: string;
    name: string;
    description: string;
    status: string;

    criticality: Criticality;
    // category: ProblemCategory;

    // teamOwnerId: string;
    // teamOwner: Team;

    // requestDatas: RequestData[];
}
