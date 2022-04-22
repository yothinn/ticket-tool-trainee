import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProblemCategoryRoutingModule } from './problem-category-routing.module';
import { ProblemCategoryComponent } from './problem-category/problem-category.component';



@NgModule({
  declarations: [
    ProblemCategoryComponent
  ],
  imports: [
    ProblemCategoryRoutingModule,
    SharedModule
  ]
})
export class ProblemCategoryModule { }
