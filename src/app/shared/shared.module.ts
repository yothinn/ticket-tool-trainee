import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StatusIconsComponent } from './components/status-icons/status-icons.component';
import { MaterialModule } from './material/material.module';
import { CriticalityIconComponent } from './components/criticality-icon/criticality-icon.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';

@NgModule({
    declarations: [
        FilterButtonComponent,
        PaginatorComponent,
        StatusIconsComponent,
        CriticalityIconComponent,
        VerticalTimelineComponent
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

        FilterButtonComponent,
        PaginatorComponent,
        StatusIconsComponent,
        CriticalityIconComponent,
        VerticalTimelineComponent
    ]
})
export class SharedModule
{
}
