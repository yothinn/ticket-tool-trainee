import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request-data-info',
  templateUrl: './request-data-info.component.html',
  styleUrls: ['./request-data-info.component.scss']
})
export class RequestDataInfoComponent implements OnInit {
  @Input() requestData:any
  @Output() closed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectData(event: any, member: any): void{
    console.log(event)
    console.log(member)
  }
}
