import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { holidays as holidaysData } from './data';
import { Holiday } from 'app/core/holiday/holiday.types';

@Injectable({
    providedIn: 'root'
})
export class HolidayMockApi
{
    private _holidays: Holiday[] = holidaysData;

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
            data: cloneDeep(this._holidays)
        };

        this._fuseMockApiService
            .onGet('api/v1/holidays')
            .reply(() => [200, pageResponse]);
    }
}
