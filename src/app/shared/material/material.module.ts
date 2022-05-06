import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
  ]
})
export class MaterialModule { }
