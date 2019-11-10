import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import {
  ApplicationAction,
  EMPLOYEE_ACTIONS
} from '../../../../../shared/ngrx/actions/application.action';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from '../../../../../shared/models/employee';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }

  private appStoreObs: Observable<ApplicationAction>;
  private appStoreSub: Subscription;
  public employees: Employee[];
  public isLoading: boolean = true;

  ngOnInit() {
    this.appStoreObs = this.appStore.pipe(
      select('employee')
    );
    this.appStoreSub = this.appStoreObs.subscribe(
      (actions: ApplicationAction) => {
        switch(actions.type){
          case EMPLOYEE_ACTIONS.GET: {
            this.isLoading = true;
            break;
          }
          case EMPLOYEE_ACTIONS.GET_SUCCESS: {
            this.employees = [...actions.payload];
            this.isLoading = false;
            break;
          }
          case EMPLOYEE_ACTIONS.GET_ERROR: {
            break;
          }
          case EMPLOYEE_ACTIONS.CREATE: {
            break;
          }
          case EMPLOYEE_ACTIONS.CREATE_SUCCESS: {
            this.appStore.dispatch({
              type: EMPLOYEE_ACTIONS.GET
            });
            break;
          }
          case EMPLOYEE_ACTIONS.CREATE_ERROR: {
            break;
          }
          case EMPLOYEE_ACTIONS.UPDATE: {
            break;
          }
          case EMPLOYEE_ACTIONS.UPDATE_SUCCESS: {
            break;
          }
          case EMPLOYEE_ACTIONS.UPDATE_ERROR: {
            break;
          }
          case EMPLOYEE_ACTIONS.DELETE: {
            break;
          }
          case EMPLOYEE_ACTIONS.DELETE_SUCCESS: {
            break;
          }
          case EMPLOYEE_ACTIONS.DELETE_ERROR: {
            break;
          }
        }
      }
    );
  }

  ngOnDestroy(){
    this.appStoreSub.unsubscribe();
  }

}
