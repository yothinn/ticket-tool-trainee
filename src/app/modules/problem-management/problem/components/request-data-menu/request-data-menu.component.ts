import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request-data-menu',
  templateUrl: './request-data-menu.component.html',
  styleUrls: ['./request-data-menu.component.scss']
})
export class RequestDataMenuComponent implements OnInit {
  @Input() requestData:string[]
  @Output() closed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectData(event: any, member: any): void{
    console.log(event)
    console.log(member)
  }
}
