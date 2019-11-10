import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType
} from '@ngrx/effects';
import { Observable } from "rxjs/Observable";
import {
    ApplicationAction,
    MEMBERS_ACTIONS
} from "../actions/application.action";
import {
    map,
    mergeMap,
    catchError,
    delay
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MembersService } from './../../services/members.service';

@Injectable()
export class MembersEffect {
    constructor(
        private $actions: Actions,
        private membersService: MembersService
    ) { }

    @Effect() $fetchCustomers: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(MEMBERS_ACTIONS.FECTCH_MEMBERS),
        mergeMap(
            (actions: ApplicationAction) => this.membersService.fetchMembers().pipe(
                map(
                    (response) => ({
                        type: MEMBERS_ACTIONS.FECTCH_MEMBERS_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: MEMBERS_ACTIONS.FECTCH_MEMBERS_ERROR,
                        payload: error
                    })
                ),
                // delay(2000)
            )
        )
    );

    @Effect() $createMember: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(MEMBERS_ACTIONS.CREATE_MEMBERS),
        mergeMap(
            (actions: ApplicationAction) => this.membersService.createMember(actions.payload).pipe(
                map(
                    (response) => ({
                        type: MEMBERS_ACTIONS.CREATE_MEMBERS_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: MEMBERS_ACTIONS.CREATE_MEMBERS_ERROR,
                        payload: error
                    })
                )
            )
        )
    );
    @Effect() $updateMember: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(MEMBERS_ACTIONS.UPDATE_MEMBERS),
        mergeMap(
            (actions: ApplicationAction) => this.membersService.updateMember(actions.payload).pipe(
                map(
                    (response) => ({
                        type: MEMBERS_ACTIONS.UPDATE_MEMBERS_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: MEMBERS_ACTIONS.UPDATE_MEMBERS_ERROR,
                        payload: error
                    })
                )
            )
        )
    );

    @Effect() $deleteMember: Observable<ApplicationAction> = this.$actions.pipe(
        ofType(MEMBERS_ACTIONS.DELETE_MEMBERS),
        mergeMap(
            (actions: ApplicationAction) => this.membersService.deleteMember(actions.payload).pipe(
                map(
                    (response) => ({
                        type: MEMBERS_ACTIONS.DELETE_MEMBERS_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    (error) => of({
                        type: MEMBERS_ACTIONS.DELETE_MEMBERS_ERROR,
                        payload: error
                    })
                )
            )
        )
    );
}