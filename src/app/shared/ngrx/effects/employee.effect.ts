import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType
} from '@ngrx/effects';
import { Observable } from "rxjs/Observable";
import {
    EMPLOYEE_ACTIONS,
    ApplicationAction
} from "../actions/application.action";
import {
    map,
    mergeMap,
    catchError,
    delay
} from 'rxjs/operators';
import { EmployeeService } from "../../services/employee.service";
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeEffect {
    constructor(
        private $actions: Actions,
        private employeeService: EmployeeService
    ) { }

    @Effect() $getEmployees: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(EMPLOYEE_ACTIONS.GET),
        mergeMap(
            (actions: ApplicationAction) => this.employeeService.getEmployees().pipe(
                map(
                    (response) => ({
                        type: EMPLOYEE_ACTIONS.GET_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: EMPLOYEE_ACTIONS.GET_ERROR,
                        payload: error
                    })
                ),
                delay(3000)
            )
        )
    );

    @Effect() $createEmployee: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(EMPLOYEE_ACTIONS.CREATE),
        mergeMap(
            (actions: ApplicationAction) => this.employeeService.createEmployee(actions.payload).pipe(
                map(
                    (response) => ({
                        type: EMPLOYEE_ACTIONS.CREATE_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: EMPLOYEE_ACTIONS.CREATE_ERROR,
                        payload: error
                    })
                )
            )
        )
    );
}