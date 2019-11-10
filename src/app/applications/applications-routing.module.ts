import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo-crud',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      {
        path: 'kin-1-management',
        loadChildren: './modules/kin-1-management/kin-1-management.module#Kin1ManagementModule'
      },
      {
        path: '',
        children: [
          {
            path: 'demo-crud',
            loadChildren: './modules/demo-crud/demo-crud.module#DemoCrudModule'
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
