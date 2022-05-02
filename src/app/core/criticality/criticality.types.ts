import { BaseInterface } from '../base/baseInterface.types';

export interface Criticality extends BaseInterface{
    id: string;
    name: string;
    color: string;
    totalPeriod: string;
    acknowledgeTime: string;
    processTime: string;
}
