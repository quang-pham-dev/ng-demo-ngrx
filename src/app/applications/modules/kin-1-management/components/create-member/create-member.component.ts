import {
  Component,
  OnInit
} from '@angular/core';
import { Members } from './../../../../../shared/models/members';
import { Store } from '@ngrx/store';
import {
  ApplicationAction,
  MEMBERS_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';

@Component({
  selector: 'create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }
  public membersList: Members
  ngOnInit() {
    this.membersList = {
      account: '',
      full_name: '',
      date_of_birth: '',
      gender: '',
      phone_number: '',
      marital_status: '',
    }
  }
  onCloseModalCreate() {
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.CLOSE_MODAL_CREATE
    });
  }
  onCreateMember() {
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.CREATE_MEMBERS,
      payload: this.membersList
    })
  }
}
