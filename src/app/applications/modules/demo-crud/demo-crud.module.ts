import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DemoCrudRoutingModule } from './demo-crud-routing.module';
import { ControlComponent } from './components/control/control.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { PagingService } from '../../../shared/services/paging.service';

@NgModule({
  imports: [
    CommonModule,
    DemoCrudRoutingModule,
    FormsModule
  ],
  declarations: [
    ControlComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
  ],
  providers: [
    PagingService
  ]
})
export class DemoCrudModule { }
