import { DeleteMemberRequest } from './../../../../../shared/models/model-request/delete-member-request';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Members } from '../../../../../shared/models/members';
import { Store } from '@ngrx/store';
import {
  ApplicationAction,
  MEMBERS_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';

@Component({
  selector: 'delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.scss']
})
export class DeleteMemberComponent implements OnInit, OnChanges {

  constructor(
    private appStore: Store<ApplicationAction>

  ) {
  }

  @Input() memberListInfo: Members;
  public deleteMemberRequest: DeleteMemberRequest;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    // if (changes.memberListSelected && this.memberListInfo) {
    //   this.member_id = this.memberListInfo.id;
    //   this.account = this.memberListInfo.account;
    // }
  }
  onDeleteMember() {
    this.deleteMemberRequest = {
      id: this.memberListInfo.id
    }
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.DELETE_MEMBERS,
      payload: this.deleteMemberRequest
    })

  }
  onCloseModalDelete() {
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.CLOSE_MODAL_DELETE,
    })
  }
}
