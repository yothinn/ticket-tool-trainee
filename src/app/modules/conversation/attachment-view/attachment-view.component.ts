import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment-view',
  templateUrl: './attachment-view.component.html',
  styleUrls: ['./attachment-view.component.scss']
})
export class AttachmentViewComponent implements OnInit {

  imgIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mMOsPxy42XQK7i4hiDf83vqHAjau3zrttg&usqp=CAU';
  constructor() { }

  ngOnInit(): void {
  }

}
