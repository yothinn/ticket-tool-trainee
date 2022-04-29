import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { requestDatas } from './data';
import { RequestData } from 'app/core/request-data/request-data.types';

@Injectable({
    providedIn: 'root'
})
export class RequestDataMockApi
{
    private _requestDatas: RequestData[] = requestDatas;

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
            data: cloneDeep(this._requestDatas)
        };

        this._fuseMockApiService
            .onGet('api/v1/request-datas')
            .reply(() => [200, pageResponse]);
    }
}
