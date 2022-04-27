import { BaseInterface } from '../base/baseInterface.types';

export interface Problem extends BaseInterface{
    id: string;
    name: string;
    description: string;
    status: string;
}
