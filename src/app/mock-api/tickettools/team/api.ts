import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { teams as teamsData } from './data';
import { Team } from 'app/core/team/team.types';

@Injectable({
    providedIn: 'root'
})
export class TeamMockApi
{
    private _teams: Team[] = teamsData;

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
            data: cloneDeep(this._teams)
        };

        this._fuseMockApiService
            .onGet('api/v1/teams')
            .reply(() => [200, pageResponse]);
    }
}
