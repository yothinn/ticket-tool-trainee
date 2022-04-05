import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialDataResolver } from './app.resolvers';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'reports',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'ticket',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/ticket/ticket.module').then(m => m.TicketModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
