import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType
} from '@ngrx/effects';
import { Observable } from "rxjs/Observable";
import {
    CUSTOMERS_ACTIONS,
    ApplicationAction
} from "../actions/application.action";
import {
    map,
    mergeMap,
    catchError,
    delay
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { CustomersService } from '../../services/customers.service';

@Injectable()
export class CustomersEffect {
    constructor(
        private $actions: Actions,
        private customersService: CustomersService
    ) { }

    @Effect() $fetchCustomers: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(CUSTOMERS_ACTIONS.FECTCH_CUSTOMERS),
        mergeMap(
            (actions: ApplicationAction) => this.customersService.fetchCustomers().pipe(
                map(
                    (response) => ({
                        type: CUSTOMERS_ACTIONS.FECTCH_CUSTOMERS_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: CUSTOMERS_ACTIONS.FECTCH_CUSTOMERS_ERROR,
                        payload: error
                    })
                ),
                // delay(3000)
            )
        )
    );

    // @Effect() $createEmployee: Observable<ApplicationAction> = this.$actions.pipe(
    //     ofType(CUSTOMERS_ACTIONS.CREATE_CUSTOMER),
    //     mergeMap(
    //         (actions: ApplicationAction) => this.customersService.createEmployee(actions.payload).pipe(
    //             map(
    //                 (response) => ({
    //                     type: CUSTOMERS_ACTIONS.CREATE_CUSTOMER_SUCCESS,
    //                     payload: response
    //                 })
    //             ),
    //             catchError(
    //                 (error) => of({
    //                     type: CUSTOMERS_ACTIONS.CREATE_CUSTOMER_ERROR,
    //                     payload: error
    //                 })
    //             )
    //         )
    //     )
    // );
}