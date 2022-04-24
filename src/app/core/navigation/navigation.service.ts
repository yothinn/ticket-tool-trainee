import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { defaultNavigation, compactNavigation, futuristicNavigation, horizontalNavigation } from './navigation.data';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation>
    {
        const _navigation: Navigation = {
            compact: compactNavigation,
            default: defaultNavigation,
            futuristic: futuristicNavigation,
            horizontal: horizontalNavigation,
        };

        return of(_navigation).pipe(
                tap((navigation) => {
                    this._navigation.next(navigation);
                })
            );

        // 24/4/2022 : Fuse not use
        // return this._httpClient.get<Navigation>('api/common/navigation').pipe(
        //     tap((navigation) => {
        //         this._navigation.next(navigation);
        //     })
        // );
    }
}
