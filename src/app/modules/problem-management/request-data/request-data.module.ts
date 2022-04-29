import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RequestDataInfoComponent } from './component/request-data-info/request-data-info.component';
import { RequestDataListComponent } from './component/request-data-list/request-data-list.component';
import { RequestDataEditDialogComponent } from './dialogs/request-data-edit-dialog/request-data-edit-dialog.component';
import { RequestDataRoutingModule } from './request-data-routing.module';
import { RequestDataComponent } from './request-data/request-data.component';




@NgModule({
  declarations: [
    RequestDataInfoComponent,
    RequestDataListComponent,
    RequestDataComponent,
    RequestDataEditDialogComponent
  ],
  imports: [
    SharedModule,
    RequestDataRoutingModule
  ]
})
export class RequestDataModule { }
