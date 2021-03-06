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
    data: { breadcrumb: 'Home'},
    children : [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
        data: { breadcrumb: 'Reports' }
      },
      {
        path: 'myticket',
        loadChildren: () => import('./modules/my-ticket/my-ticket.module').then(m => m.MyTicketModule),
        data: { breadcrumb: 'My Ticket' }
      },
      {
        path: 'ticket-management',
        loadChildren: () => import('./modules/ticket-management/ticket-management.module').then(m => m.TicketManagementModule),
        data: { breadcrumb: 'Ticket Management' }
      },
      {
        path: 'team-management',
        loadChildren: () => import('./modules/team-management/team-management.module').then(m => m.TeamManagementModule),
        data: { breadcrumb: 'Team Management' }
      },
      {
        path: 'problem-management',
        loadChildren: () => import('./modules/problem-management/problem-management.module').then(m => m.ProblemManagementModule),
        data: { breadcrumb: 'Problem Management' }
      },
      {
        path: 'sla-management',
        loadChildren: () => import('./modules/sla-management/sla-management.module').then(m => m.SlaManagementModule),
        data: { breadcrumb: 'SLA Management' }
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        data: {
          breadcrumb: null,
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
