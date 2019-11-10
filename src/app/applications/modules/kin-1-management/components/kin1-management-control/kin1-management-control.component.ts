import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import {
  BsModalRef,
  BsModalService
} from "ngx-bootstrap";
import {
  ApplicationAction,
  MEMBERS_ACTIONS,
} from '../../../../../shared/ngrx/actions/application.action';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Members } from './../../../../../shared/models/members';
import { DeleteMemberRequest } from '../../../../../shared/models/model-request/delete-member-request';
import { RESET_STATE } from '../../../../../shared/ngrx/actions/application.action';

@Component({
  selector: 'app-kin1-management-control',
  templateUrl: './kin1-management-control.component.html',
  styleUrls: ['./kin1-management-control.component.scss']
})
export class Kin1ManagementControlComponent implements OnInit {

  constructor(
    private appStore: Store<ApplicationAction>,
    private modalService: BsModalService,
  ) {

  }
  private appStoreObs: Observable<ApplicationAction>;
  private appStoreSub: Subscription;
  public membersList: Members[];
  public memberListInfo: Members;
  private modalCreateMembersRef: BsModalRef;
  private modalDeleteMembersRef: BsModalRef;
  private modalUpdateMembersRef: BsModalRef;
  public isLoading: boolean = false;

  @ViewChild('createMemberForm') private createMemberForm: TemplateRef<any>;
  @ViewChild('deleteMemberForm') private deleteMemberForm: TemplateRef<any>;
  @ViewChild('updateMemberForm') private updateMemberForm: TemplateRef<any>;

  ngOnInit() {
    this.appStoreObs = this.appStore.pipe(
      select('members')
    );
    this.appStoreSub = this.appStoreObs.subscribe(
      (actions: ApplicationAction) => {
        switch (actions.type) {
          case MEMBERS_ACTIONS.FECTCH_MEMBERS: {
            this.isLoading = true;
            break;
          }
          case MEMBERS_ACTIONS.FECTCH_MEMBERS_SUCCESS: {
            this.membersList = [...actions.payload];
            this.isLoading = false;
            break;
          }
          case MEMBERS_ACTIONS.FECTCH_MEMBERS_ERROR: {
            break;
          }
          case MEMBERS_ACTIONS.CREATE_MEMBERS: {
            break;
          }
          case MEMBERS_ACTIONS.CREATE_MEMBERS_SUCCESS: {
            this.appStore.dispatch({
              type: MEMBERS_ACTIONS.FECTCH_MEMBERS
            });
            this.modalCreateMembersRef.hide();
            break;
          }
          case MEMBERS_ACTIONS.CREATE_MEMBERS_ERROR: {
            break;
          }
          case MEMBERS_ACTIONS.DELETE_MEMBERS: {
            let deleteMemberRequest: DeleteMemberRequest;
            deleteMemberRequest = actions.payload
            break;
          }
          case MEMBERS_ACTIONS.DELETE_MEMBERS_SUCCESS: {
            this.appStore.dispatch({
              type: MEMBERS_ACTIONS.FECTCH_MEMBERS
            });
            this.modalDeleteMembersRef.hide();
            break;
          }
          case MEMBERS_ACTIONS.DELETE_MEMBERS_ERROR: {
            break;
          }
          case MEMBERS_ACTIONS.UPDATE_MEMBERS: {
            break;
          }
          case MEMBERS_ACTIONS.UPDATE_MEMBERS_SUCCESS: {
            this.modalUpdateMembersRef.hide();
            this.appStore.dispatch({
              type: MEMBERS_ACTIONS.FECTCH_MEMBERS
            });
            break;
          }
          case MEMBERS_ACTIONS.UPDATE_MEMBERS_ERROR: {
            break;
          }
          case MEMBERS_ACTIONS.OPEN_MODAL_CREATE: {
            this.modalCreateMembersRef = this.modalService.show(this.createMemberForm);
            break;
          }
          case MEMBERS_ACTIONS.CLOSE_MODAL_CREATE: {
            this.modalCreateMembersRef.hide();
            break;
          }
          case MEMBERS_ACTIONS.OPEN_MODAL_DELETE: {
            this.memberListInfo = {
              id: actions.payload.id,
              full_name: actions.payload.full_name,
              account: actions.payload.account,
              date_of_birth: actions.payload.date_of_birth,
              gender: actions.payload.gender,
              phone_number: actions.payload.phone_number,
              marital_status: actions.payload.marital_status
            }
            this.modalDeleteMembersRef = this.modalService.show(this.deleteMemberForm);
            break;
          }
          case MEMBERS_ACTIONS.CLOSE_MODAL_DELETE: {
            this.modalDeleteMembersRef.hide();
            break;
          }
          case MEMBERS_ACTIONS.OPEN_MODAL_UPDATE: {
            this.memberListInfo = {
              id: actions.payload.id,
              full_name: actions.payload.full_name,
              account: actions.payload.account,
              date_of_birth: actions.payload.date_of_birth,
              gender: actions.payload.gender,
              phone_number: actions.payload.phone_number,
              marital_status: actions.payload.marital_status
            }
            this.modalUpdateMembersRef = this.modalService.show(this.updateMemberForm);
            break;
          }
          case MEMBERS_ACTIONS.CLOSE_MODAL_UPDATE: {
            this.modalUpdateMembersRef.hide();
            break;
          }
        }
      }
    );
  }
  ngOnDestroy() {
    this.modalService._hideModal(1);
    this.appStoreSub.unsubscribe();
    this.appStore.dispatch({
      type: MEMBERS_ACTIONS.RESET_STATE
    });
  }
}
