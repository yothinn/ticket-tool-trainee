import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-ticket-card-info',
  templateUrl: './my-ticket-card-info.component.html',
  styleUrls: ['./my-ticket-card-info.component.scss']
})
export class MyTicketCardInfoComponent implements OnInit {
  
  @Input() myTicketData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
