import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kin1ManagementControlComponent } from './components/kin1-management-control/kin1-management-control.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kin-1-management',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Kin1ManagementControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Kin1ManagementRoutingModule { }
