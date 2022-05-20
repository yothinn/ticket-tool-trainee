import { BaseInterface } from '../base/baseInterface.types';

export interface User extends BaseInterface {
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
    avatar?: string;
    status?: string;
}
