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
    path: 'system',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/system-management/system-management.module').then(m => m.SystemManagementModule),
  },
  {
    path: 'profile',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'settings',
    component: LayoutComponent,
    data: {
      layout: 'dense'
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
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
