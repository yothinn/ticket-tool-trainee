import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FilterButton } from './filter-button-interface';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  @Input() buttons?: FilterButton[];
  @Input() active?: FilterButton;

  @Output() selected: EventEmitter<FilterButton> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons);
  }

  onSelected(buttonToggle: MatButtonToggleChange): void {
    console.log(buttonToggle.value);
    this.selected.emit(buttonToggle.value);
  }
}
