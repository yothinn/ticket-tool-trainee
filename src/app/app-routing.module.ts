import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialDataResolver } from './app.resolvers';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children : [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
      },
      {
        path: 'ticket',
        loadChildren: () => import('./modules/ticket/ticket.module').then(m => m.TicketModule),
      },
      {
        path: 'system',
        loadChildren: () => import('./modules/system-management/system-management.module').then(m => m.SystemManagementModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
