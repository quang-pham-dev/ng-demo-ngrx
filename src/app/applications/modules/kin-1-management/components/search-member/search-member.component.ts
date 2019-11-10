import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Members } from './../../../../../shared/models/members';
import { Store } from '@ngrx/store';
import {
  ApplicationAction,
  MEMBERS_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';

@Component({
  selector: 'search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.scss']
})
export class SearchMemberComponent implements OnInit, OnChanges {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }

  public member: Members;
  @Input() isLoading: boolean;

  ngOnInit() {
    this.member = {
      id: '',
      full_name: '',
      account: '',
      date_of_birth: '',
      gender: '',
      phone_number: '',
      marital_status: '',
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.isLoading) {
    //   this.isLoading = false;
    //   console.log(this.isLoading);
    // }
  }
  onSearch() {
    this.isLoading = true;
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.FECTCH_MEMBERS,
      payload: this.member
    });
  }

  onOpenModalCreate() {
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.OPEN_MODAL_CREATE
    });
  }

  onClear() {
    this.member = {
      full_name: '',
      account: '',
      phone_number: '',
    }
  }
}
