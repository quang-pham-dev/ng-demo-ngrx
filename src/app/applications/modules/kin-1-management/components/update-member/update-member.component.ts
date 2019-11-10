import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationAction, MEMBERS_ACTIONS } from '../../../../../shared/ngrx/actions/application.action';
import { Members } from '../../../../../shared/models/members';
import { UpdateMemberRequest } from '../../../../../shared/models/model-request/update-member-request';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent implements OnInit {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }
  @Input() memberListInfo: Members;

  public updateMemberRequest: UpdateMemberRequest;

  public updateForm: {
    id?: FormControl;
    full_name?: FormControl;
    account?: FormControl;
    date_of_birth?: FormControl;
    gender?: FormControl;
    phone_number?: FormControl;
    marital_status?: FormControl;
  }
  ngOnInit() {
    this.updateForm = {
      id: new FormControl(this.memberListInfo.id),
      full_name: new FormControl(this.memberListInfo.full_name),
      account: new FormControl(this.memberListInfo.account),
      date_of_birth: new FormControl(this.memberListInfo.date_of_birth),
      gender: new FormControl(this.memberListInfo.gender),
      phone_number: new FormControl(this.memberListInfo.phone_number),
      marital_status: new FormControl(this.memberListInfo.marital_status),
    }
  }
  onCloseModalUpdate() {
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.CLOSE_MODAL_UPDATE,
    })
  }
  onUpdateMember() {
    this.updateMemberRequest = {
      id: this.updateForm.id.value,
      full_name: this.updateForm.full_name.value,
      account: this.updateForm.account.value,
      date_of_birth: this.updateForm.date_of_birth.value,
      gender: this.updateForm.gender.value,
      phone_number: this.updateForm.phone_number.value,
      marital_status: this.updateForm.marital_status.value,
    }
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.UPDATE_MEMBERS,
      payload: this.updateMemberRequest
    });
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.CLOSE_MODAL_UPDATE,
      payload: MEMBERS_ACTIONS.FECTCH_MEMBERS
    });
  }
}
