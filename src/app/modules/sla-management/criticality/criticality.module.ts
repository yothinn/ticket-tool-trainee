import { NgModule } from '@angular/core';
import { CriticalityComponent } from './criticality/criticality.component';
import { CriticalityListComponent } from './component/criticality-list/criticality-list.component';
import { CriticalityInfoComponent } from './component/criticality-info/criticality-info.component';
import { SharedModule } from 'app/shared/shared.module';
import { CriticalEditDialogComponent } from './dialogs/critical-edit-dialog/critical-edit-dialog.component';
import { CriticalityRoutingModule } from './criticality-routing.module';



@NgModule({
  declarations: [
    CriticalityComponent,
    CriticalityListComponent,
    CriticalityInfoComponent,
    CriticalEditDialogComponent
  ],
  imports: [
    CriticalityRoutingModule,
    SharedModule
  ]
})
export class CriticalityModule { }
