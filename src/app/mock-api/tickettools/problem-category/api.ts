import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { problemCategories as problemCategoriesData } from './data';
import { ProblemCategory } from 'app/core/problem-category/problem-category.types';

@Injectable({
    providedIn: 'root'
})
export class ProblemCategoryMockApi
{
    private _problemCategories: ProblemCategory[] = problemCategoriesData;

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
            data: cloneDeep(this._problemCategories)
        };

        this._fuseMockApiService
            .onGet('api/v1/problem-categories')
            .reply(() => [200, pageResponse]);
    }
}
