import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProblemCategoryInfoComponent } from './components/problem-category-info/problem-category-info.component';
import { ProblemCategoryListComponent } from './components/problem-category-list/problem-category-list.component';
import { ProblemCategoryRoutingModule } from './problem-category-routing.module';
import { ProblemCategoryComponent } from './problem-category/problem-category.component';




@NgModule({
  declarations: [
    ProblemCategoryComponent,
    ProblemCategoryInfoComponent,
    ProblemCategoryListComponent
  ],
  imports: [
    ProblemCategoryRoutingModule,
    SharedModule
  ]
})
export class ProblemCategoryModule { }
