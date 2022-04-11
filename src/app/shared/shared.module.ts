import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StatusIconsComponent } from './components/status-icons/status-icons.component';
import { MaterialModule } from './material/material.module';
import { CriticalityIconComponent } from './components/criticality-icon/criticality-icon.component';


@NgModule({
    declarations: [
        FilterButtonComponent,
        PaginatorComponent,
        StatusIconsComponent,
        CriticalityIconComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        // SharedModule
        FilterButtonComponent,
        PaginatorComponent,
        StatusIconsComponent,
        CriticalityIconComponent

    ]
})
export class SharedModule
{
}
