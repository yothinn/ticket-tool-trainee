import { BaseInterface } from '../base/baseInterface.types';

export interface RequestData extends BaseInterface{
    id: string;
    keyName: string;
    displayName: string;
    controlType: string;
}
