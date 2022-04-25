import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { problemCauses as problemCausesData } from './data';
import { ProblemCause } from 'app/core/problem-cause/problem-cause.types';

@Injectable({
    providedIn: 'root'
})
export class ProblemCauseMockApi
{
    private _problemCauses: ProblemCause[] = problemCausesData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        const pageResponse = {
            code: '20001',
            message: 'success',
            pageNo: 1,
            pageSize: 20,
            totalRecord: 30,
            data: cloneDeep(this._problemCauses)
        };

        this._fuseMockApiService
            .onGet('api/v1/problem-causes')
            .reply(() => [200, pageResponse]);
    }
}
