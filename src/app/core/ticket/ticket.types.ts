import { BaseInterface } from '../base/baseInterface.types';
import { Problem } from '../problem/problem.types';
import { RequestData } from '../request-data/request-data.types';

export interface Ticket extends BaseInterface{
    id: string;

    // problemId: string;
    // problem?: Problem;

    // Dynamic field ?? How to define
    // requestDatas?: RequestData[];

}
