import { BaseInterface } from '../base/baseInterface.types';

export interface Holiday extends BaseInterface{
    id: string;
    name: string;
    date: Date;
    isWholeDay: boolean;
    startTime: string;
    endTime: string;
}
