import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-owner-dialog',
  templateUrl: './team-owner-dialog.component.html',
  styleUrls: ['./team-owner-dialog.component.scss']
})
export class TeamOwnerDialogComponent implements OnInit {
  data: object = [
    {name:'name1',description:'description1',total:'3 Member'},
    {name:'name1',description:'description1',total:'3 Member'},
    {name:'name1',description:'description1',total:'3 Member'},
    {name:'name1',description:'description1',total:'3 Member'},
    {name:'name1',description:'description1',total:'3 Member'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
