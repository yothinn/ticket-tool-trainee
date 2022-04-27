import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterButton } from './filter-button-interface';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  @Input() buttons?: FilterButton[];

  @Output() selected: EventEmitter<FilterButton> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons);
  }

  onClick(button: FilterButton): void {
    this.selected.emit(button);
  }
}
