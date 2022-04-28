import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-contact-view',
  templateUrl: './team-contact-view.component.html',
  styleUrls: ['./team-contact-view.component.scss']
})
export class TeamContactViewComponent implements OnInit {
  // @Input() contactTest?: any;


  constructor() { }

  ngOnInit(): void {
    // console.log(this.contactTest);
  }

}
