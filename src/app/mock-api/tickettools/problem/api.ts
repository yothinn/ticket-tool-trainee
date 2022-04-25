import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { problems as problemsData } from './data';
import { Problem } from 'app/core/problem/problem.types';

@Injectable({
    providedIn: 'root'
})
export class ProblemMockApi
{
    private _problems: Problem[] = problemsData;

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
            data: cloneDeep(this._problems)
        };

        this._fuseMockApiService
            .onGet('api/v1/problems')
            .reply(() => [200, pageResponse]);
    }
}
