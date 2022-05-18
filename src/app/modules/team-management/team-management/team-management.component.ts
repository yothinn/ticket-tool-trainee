import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { GetTeamParameter } from 'app/core/parameters/getTeamParameter.entity';
import { TeamStatusDto } from 'app/core/team/team-status.dto';
import { TeamStatus } from 'app/core/team/team-status.enum';
import { TeamService } from 'app/core/team/team.service';
import { Team } from 'app/core/team/team.types';
import { FilterButton } from 'app/shared/components/filter-button/filter-button-interface';
import { DEF_PAGESIZE, Page } from 'app/shared/components/paginator/page.type';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { TeamCardListComponent } from '../components/team-card-list/team-card-list.component';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('searchCtrl') searchCtrl: ElementRef;
  @ViewChild('drawerDetail') drawerDetail: MatSidenav;
  @ViewChild('teamListComp') teamListComp: TeamCardListComponent;

  teamResponse$?: Observable<PageResponse<Team[]>>;
  allStatuses$?: Observable<TeamStatusDto[]>;
  getTeams$: Subject<any> = new Subject<any>();

  isViewMode: boolean = false;
  teamInfoMode: 'create' | 'edit' = 'create';

  currPage: Page = { pageNo: 1, pageSize: DEF_PAGESIZE};
  currFilter?: FilterButton;
  isSearching: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _teamService: TeamService,
  ) {

    // Init get all status observer
    this.allStatuses$ = this.getAllStatuses();

    // Init get teams observer
    this.teamResponse$ = this.getTeams$.pipe(
      takeUntil(this._unsubscribeAll),
      debounceTime(300),
      switchMap(_ => this.getTeams())
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit(): void {
    this.getTeams$.next('');
    this.registerSearch();
  }

  /**
   * Register search control for dynamic search
   */
  registerSearch(): void {
    fromEvent(this.searchCtrl.nativeElement, 'input').pipe(
      takeUntil(this._unsubscribeAll),
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      // search when text is greater equal than 3 or zero
      filter(text => text.length >= 3 || text.length === 0),
      tap(text => this.isSearching = (text.length === 0) ? false : true),
      // Delay 300 ms
      debounceTime(300),
      distinctUntilChanged(),
      // send event
      tap(_ => this.getTeams$.next(''))
    ).subscribe();
  }

  getAllStatuses(): Observable<TeamStatusDto[]> {
    return this._teamService.getAllStatus()
      .pipe(
        tap((statuses: TeamStatusDto[]) => {
          // Init current filter
          if (statuses.length > 0) {
            this.currFilter = statuses[0] as FilterButton;
          }
        })
      );
  }

  /**
   * Get Teams with all parameter 
   * search parameter is pageNo, pageSize, search, orderBy
   */
  getTeams(): Observable<PageResponse<Team[]>> {
    const param = new GetTeamParameter();
    const search = this.searchCtrl.nativeElement.value;

    // If only has search text
    if (search !== '') {
      param.search = search;
    }

    param.pageNo = this.currPage.pageNo;
    param.pageSize = this.currPage.pageSize;

    // set status only active or inactive , all not set
    if (this.currFilter && this.currFilter?.status !== 'all') {
      param.status = this.currFilter.status as TeamStatus;
    }

    return this._teamService.getTeams(param);
  }

  onViewOpened(team: Team): void {
    console.log(team);

    this._teamService.activeTeam = team;

    this.isViewMode = true;
    this._openDetail();
  }

  onViewClosed(): void {
    this.drawerDetail.toggle();
    this._teamService.activeTeam = undefined;
    this.teamListComp.activeTeam = undefined;
  }

  onTeamEdit(mode: 'create' | 'edit'): void {

    this.isViewMode = false;
    this.teamInfoMode = mode;

    this._openDetail();
  }

  onTeamEditClosed(event: boolean): void {
    // True is save, false is cancel
    this.drawerDetail.toggle();
  }

  onFilterStatus(status: FilterButton): void {
    this.currFilter = status;
    this._resetPage();
    this.getTeams$.next('');
  }

  onPageChange(page: Page): void {
    this.currPage = page;

    this.getTeams$.next('');
  }

  onSearchCancel(): void {
    this.searchCtrl.nativeElement.value = '';
    this.isSearching = false;
    this.getTeams$.next('');
  }

  private _openDetail(): void {
    if (!this.drawerDetail.opened) {
      this.drawerDetail?.toggle();
    }
  }

  private _resetPage(): void {
    this.currPage.pageNo = 1;
    this.currPage.pageSize = DEF_PAGESIZE;
  }

}
