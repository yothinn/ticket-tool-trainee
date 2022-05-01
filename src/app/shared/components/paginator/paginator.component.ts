import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges  {

  @Input() pageNo: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalRecord?: number;
  @Input() pageSizeOptions: number[] = [10, 20, 50];
  @Input() maxPageView: number = 5;

  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  totalPages?: number;
  pageViews: number[] = [];

  addNextPageGroup: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Generate 1...5 array
    this.pageViews = [...Array(this.maxPageView).keys()].map(i => i + 1);

  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.totalRecord) {
        this.totalPages = this._calTotalPages(this.pageSize, this.totalRecord);

        console.log(this.totalRecord);
      }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get canNextPageGroup(): boolean {
    if (this.totalPages) {
      const tmpAddNextPageGroup = this.addNextPageGroup + this.maxPageView;

      return tmpAddNextPageGroup < this.totalPages;
    }
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get canPrevPageGroup(): boolean {
    return this.addNextPageGroup > 0;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get morePrevView(): boolean {
    return this.addNextPageGroup > 0;
    // return this.pageNo > this.maxPageView;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get moreNextView(): boolean {
    if (this.totalPages) {
      const tmpAddNextPageGroup = this.addNextPageGroup + this.maxPageView;

      return tmpAddNextPageGroup < this.totalPages;
    }
    return true;
  }

  clickPageNo(pageNo: number): void {
    this.pageNo = pageNo;
    this.onPageChanged();
  }

  //กดเลื่อนไปด้ายขวา
  nextPageGroup(skipLast: boolean = false): void {

    const tmpAddNextPageGroup = this.addNextPageGroup + this.maxPageView;

    if ((this.totalPages === undefined) || (tmpAddNextPageGroup < this.totalPages)) {
      if (skipLast) {
        if (this.totalPages) {
          const lastPageGroup = Math.ceil(this.totalPages / this.maxPageView);
          this.addNextPageGroup = this.maxPageView * (lastPageGroup - 1);
        }
      } else {
        this.addNextPageGroup = tmpAddNextPageGroup;
      }

      console.log(this.addNextPageGroup);
      this.pageNo = this.addNextPageGroup + 1;

      this.onPageChanged();
    }


  }

  //กดเลื่อนไปด้านซ้าย
  prevPageGroup(skipFirst: boolean = false): void {

    if (this.addNextPageGroup > 0) {
      if (skipFirst) {
        this.addNextPageGroup = 0;
      } else {
        this.addNextPageGroup -= this.maxPageView;
      }

      this.pageNo = this.addNextPageGroup + 1;

      this.onPageChanged();
    }

  }


  changeItemPerPage(newSize: number): void {
    const oldPageSize = this.pageSize;

    this.pageSize = newSize;

    // Calculate new page no
    if (newSize > oldPageSize) {
      const currRecord = this.pageNo * oldPageSize;
      this.pageNo = Math.ceil(currRecord / newSize);
    } else {
      const currRecord = (this.pageNo * oldPageSize) - (oldPageSize - 1);
      console.log(currRecord);
      this.pageNo = Math.ceil(currRecord / newSize);

      console.log(this.pageNo);
    }

    // Calculate addNextPageGroup
    this.addNextPageGroup = Math.ceil((this.pageNo / this.maxPageView) - 1) * this.maxPageView;

    // Calculate total page
    if (this.totalRecord) {
      this.totalPages = this._calTotalPages(this.pageSize, this.totalRecord);
    }

    this.onPageChanged();
  }

  onPageChanged(): void {
    const page = {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    };

    console.log(page);
    this.pageChanged.emit(page);
  }

  private _calTotalPages(pageSize: number, totalRecords: number): number {
    return Math.ceil(totalRecords / pageSize);
  }

}
