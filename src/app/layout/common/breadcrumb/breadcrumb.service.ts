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
    ).subscribe(() => {

      const root = this._activeRoute.root.firstChild.snapshot;
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

      const data = route.data;
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      // Add an element for the current route part
      if (data?.breadcrumb) {
        breadcrumbs.push({
          label: route.data.breadcrumb,
          url: '/' + routeUrl.join('/')
        });
      }

      // Add another element for the next route part
      if (route.children.length > 0) {
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
      }
    }
  }
}
