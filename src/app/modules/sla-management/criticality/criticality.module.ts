import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriticalityComponent } from './criticality/criticality.component';
import { CriticalityListComponent } from './component/criticality-list/criticality-list.component';
import { CriticalityInfoComponent } from './component/criticality-info/criticality-info.component';



@NgModule({
  declarations: [
    CriticalityComponent,
    CriticalityListComponent,
    CriticalityInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CriticalityModule { }
