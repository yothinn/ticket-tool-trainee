import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-criticality-icon',
  templateUrl: './criticality-icon.component.html',
  styleUrls: ['./criticality-icon.component.scss']
})
export class CriticalityIconComponent implements OnInit {

  @Input() iconName: string = 'brightness_1';
  @Input() text: string;
  @Input() color: string;
  @Input() mode: 'small' | 'medium-left' | 'medium-right' = 'small';

  constructor() {
  }

  ngOnInit(): void {
  }

}
