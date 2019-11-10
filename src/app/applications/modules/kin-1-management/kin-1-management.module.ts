import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kin1ManagementRoutingModule } from './kin-1-management-routing.module';
import { SearchMemberComponent } from './components/search-member/search-member.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { Kin1ManagementControlComponent } from './components/kin1-management-control/kin1-management-control.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SearchMemberResultComponent } from './components/search-member-result/search-member-result.component';
import { PagingService } from '../../../shared/services/paging.service';
import { ModalModule } from "ngx-bootstrap/modal";
import { DeleteMemberComponent } from './components/delete-member/delete-member.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';

@NgModule({
  imports: [
    CommonModule,
    Kin1ManagementRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    SearchMemberComponent,
    CreateMemberComponent,
    Kin1ManagementControlComponent,
    SearchMemberResultComponent,
    DeleteMemberComponent,
    UpdateMemberComponent
  ],
  providers: [
    PagingService
  ]
})
export class Kin1ManagementModule { }
