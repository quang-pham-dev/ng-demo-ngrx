import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { AppFooter } from '../shared/components/app-footer/app-footer.component';
import { AppHeader } from '../shared/components/app-header/app-header.component';
import { AppSidebar } from '../shared/components/app-sidebar/app-sidebar.component';
import { SidebarDirective } from '../shared/directives/sidebar.directive';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from '../shared/ngrx/reducers/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from '../shared/ngrx/effects/employee.effect';
import { EmployeeService } from '../shared/services/employee.service';
import { CustomersService } from '../shared/services/customers.service';
import { CustomersEffect } from '../shared/ngrx/effects/customers.effect';
import { customersReducer} from '../shared/ngrx/reducers/customers.reducer';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { membersReducer } from '../shared/ngrx/reducers/members.reducer';
import { MembersEffect } from './../shared/ngrx/effects/members.effect';
import { MembersService } from './../shared/services/members.service';


// Components in app
const APP_COMPONENTS = [
  DesktopLayoutComponent,
  AppFooter,
  AppHeader,
  AppSidebar
];
// Services in app
const APP_SERVICES = [
  EmployeeService,
  CustomersService,
  MembersService
];
// Pipes in app
const APP_PIPES = [

];
// Guards in app
const APP_GUARDS = [

];
// Directives in app
const APP_DIRECTIVES = [
  SidebarDirective
];

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      employee: employeeReducer,
      customers: customersReducer,
      members: membersReducer
    }),
    EffectsModule.forRoot([
      EmployeeEffect,
      CustomersEffect,
      MembersEffect
    ])
  ],
  declarations: [
    ...APP_COMPONENTS,
    ...APP_PIPES,
    ...APP_DIRECTIVES,
  ],
  providers: [
    ...APP_SERVICES,
    ...APP_GUARDS
  ]
})
export class ApplicationsModule { }
