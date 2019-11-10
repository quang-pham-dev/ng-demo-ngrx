import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';
import {
  Store
} from '@ngrx/store';
import {
  ApplicationAction,
  MEMBERS_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';
import { Members } from './../../../../../shared/models/members';
import { PagingService } from '../../../../../shared/services/paging.service';
import { Paging } from '../../../../../shared/models/paging';


@Component({
  selector: 'search-member-result',
  templateUrl: './search-member-result.component.html',
  styleUrls: ['./search-member-result.component.scss']
})
export class SearchMemberResultComponent implements OnInit, OnChanges {

  constructor(
    private appStore: Store<ApplicationAction>,
    private pagingService: PagingService
  ) {

  }
  @Input() membersList: Members[];
  public paging: Paging;

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.appStore.dispatch({
    //   type: MEMBERS_ACTIONS.FECTCH_MEMBERS
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.membersList && this.membersList) {
      this.paging = this.pagingService.firstLoad(this.membersList.length, 5);
    }
  }

  onOpenModalDeleteMember(member) {
    let memberListInfo: Members;
    memberListInfo = {
      id: member.id,
      full_name: member.full_name,
      account: member.account,
      date_of_birth: member.date_of_birth,
      gender: member.gender,
      phone_number: member.phone_number,
      marital_status: member.marital_status
    }
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.OPEN_MODAL_DELETE,
      payload: memberListInfo
    });
  }
  onOpenModalUpdateMember(member) {
    let memberListInfo: Members;
    memberListInfo = {
      id: member.id,
      full_name: member.full_name,
      account: member.account,
      date_of_birth: member.date_of_birth,
      gender: member.gender,
      phone_number: member.phone_number,
      marital_status: member.marital_status
    }
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.OPEN_MODAL_UPDATE,
      payload: memberListInfo
    });
  }
  prevPage() {
    this.paging = this.pagingService.pageChanges(this.paging.currentPage - 1, this.paging.pageSize, this.paging.pages, this.membersList.length);
  }

  nextPage() {
    this.paging = this.pagingService.pageChanges(this.paging.currentPage + 1, this.paging.pageSize, this.paging.pages, this.membersList.length);
  }
  selectPage(page: number) {
    this.paging = this.pagingService.pageChanges(page, this.paging.pageSize, this.paging.pages, this.membersList.length);
  }

  pageSizeChanges(pageSize: string) {
    this.paging = this.pagingService.pageSizeChanges(parseInt(pageSize), this.membersList.length);
  }

}