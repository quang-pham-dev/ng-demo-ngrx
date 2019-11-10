import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../../shared/models/employee';
import { Store } from '@ngrx/store';
import { ApplicationAction, EMPLOYEE_ACTIONS } from '../../../../../shared/ngrx/actions/application.action';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(
    private appStore: Store<ApplicationAction>
  ) { }

  public employee: Employee;

  ngOnInit() {
    this.employee = {
      empl_id: '',
      empl_name: '',
      account: '',
      phone_number: ''
    }
  }

  executeAdd(){
    this.appStore.dispatch({
      type: EMPLOYEE_ACTIONS.CREATE,
      payload: this.employee
    });
  }

}
