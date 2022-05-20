import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {

  messageDatas: any;

  constructor() { }

  ngOnInit(): void {
    this.messageDatas = [
      {
        firstName: 'รุ่งขวัญ',
        lastName: 'มีดี',
        imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2efIcihx_1KfjXK4EgnHfaqAhJbXnVD4ow&usqp=CAU',
        message: {
          messageHeader: 'Header Message',
          messageContent: 'Content Message'
        },
        dateTime: '2022-05-20T09:30:08.681Z'
      },
      {
        firstName: 'รุ่งเรือง',
        lastName: 'พอดี',
        imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU',
        message: {
          messageHeader: 'Header Message',
          messageContent: 'Content Message'
        },
        dateTime: '2022-05-20T09:30:08.681Z'
      },
      {
        firstName: 'เจริญกรุง',
        lastName: 'กรุงศรี',
        imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2efIcihx_1KfjXK4EgnHfaqAhJbXnVD4ow&usqp=CAU',
        message: {
          messageHeader: 'Header Message',
          messageContent: 'Content Message'
        },
        dateTime: '2022-05-20T09:30:08.681Z'
      },
      {
        firstName: 'สวนสยาม',
        lastName: 'กรุงเทพ',
        imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&usqp=CAU',
        message: {
          messageHeader: 'Header Message',
          messageContent: 'Content Message'
        },
        dateTime: '2022-05-20T09:30:08.681Z'
      },
    ];
  }

}
