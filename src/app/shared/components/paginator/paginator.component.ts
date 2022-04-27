import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit  {

  @Input() pageNo: number = 1;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [10, 20, 50];
  @Input() maxPageView: number = 5;

  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  pageViews: number[] = [];

  addPageViewNo: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Generate 1...5 array
    this.pageViews = [...Array(this.maxPageView).keys()].map(i => i + 1);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get canNextPage(): boolean {
    return (this.pageNo < this.pageSize) ? true : false;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get canBackPage(): boolean {
    return (this.pageNo > 1 ) ? true : false;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get morePrevView(): boolean {
    return this.pageNo > this.maxPageView;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get moreNextView(): boolean {
    return (this.pageNo <= this.maxPageView);
  }

  clickPageNo(pageNo: number): void {
    this.pageNo = pageNo;
    this.onPageChanged();
  }

  //กดเลื่อนไปด้ายขวา
  nextPage(): void {

    if (this.pageNo < this.pageSize) {
      this.pageNo++;

      const lastPageNo = this.pageViews[this.pageViews.length - 1] + this.addPageViewNo;
      if ((this.pageNo > this.maxPageView) && (this.pageNo > lastPageNo)) {
        this.addPageViewNo++;
      }
    }

    this.onPageChanged();
  }

  //กดเลื่อนไปด้านซ้าย
  prevPage(): void {

    if (this.pageNo > 1) {
      this.pageNo--;
    }

    const startPageNo = this.pageViews[0] + this.addPageViewNo;
    if (this.pageNo <= this.pageSize-this.maxPageView + 1
        && this.pageNo < startPageNo) {
      this.addPageViewNo--;
    }

    this.onPageChanged();
  }

  changeItemPerPage(size: number): void {
    this.pageSize = size;
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

}
