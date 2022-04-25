import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { tickets as ticketsData } from './data';
import { Ticket } from 'app/core/ticket/ticket.types';

@Injectable({
    providedIn: 'root'
})
export class TicketMockApi
{
    private _tickets: Ticket[] = ticketsData;

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
            data: cloneDeep(this._tickets)
        };

        this._fuseMockApiService
            .onGet('api/v1/tickets')
            .reply(() => [200, pageResponse]);
    }
}
