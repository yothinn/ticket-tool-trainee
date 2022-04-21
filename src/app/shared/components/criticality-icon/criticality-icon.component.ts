import { Component, Input, OnInit } from '@angular/core';

export enum CriticalityMode {
  small,
  medium
}

@Component({
  selector: 'app-criticality-icon',
  templateUrl: './criticality-icon.component.html',
  styleUrls: ['./criticality-icon.component.scss']
})
export class CriticalityIconComponent implements OnInit {

  @Input() iconUrl: string;
  @Input() iconName: string;
  @Input() text: string;
  @Input() color: string;
  @Input() mode: CriticalityMode = CriticalityMode.small;

  criticalityMode = CriticalityMode;

  constructor() {
    this.iconName = 'brightness_1';
  }

  ngOnInit(): void {
  }

}
