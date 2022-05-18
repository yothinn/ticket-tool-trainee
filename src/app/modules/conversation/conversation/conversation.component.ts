import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  dataTests = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
