import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, filter, Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb.types';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private _breadcrumb$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {
    this._router.events.pipe(
      // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
      filter((event: any) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((event: any) => {

      console.log(this._activeRoute);
      console.log(this._activeRoute.root.firstChild.firstChild.firstChild.snapshot.data);
      const root = this._router.routerState.snapshot.root;
      //console.log(this._router);

      const breadcrumbs: Breadcrumb[] = [];

      this.addBreadcrumb(root, [], breadcrumbs);

      this._breadcrumb$.next(breadcrumbs);
    });
  }

  get breadcrumb$(): Observable<Breadcrumb[]> {
    return this._breadcrumb$.asObservable();
  }


  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]): void {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      console.log(routeUrl);
    }
  }
}
