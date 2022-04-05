import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StatusIconsComponent } from './components/status-icons/status-icons.component';
import { MaterialModule } from './material/material.module';


@NgModule({
    declarations: [
        FilterButtonComponent,
        PaginatorComponent,
        StatusIconsComponent

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
        StatusIconsComponent

    ]
})
export class SharedModule
{
}
