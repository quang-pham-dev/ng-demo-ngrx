// import { INIT_APPLICATION_STATE } from '../states/application.state';
import * as lodash from "lodash";
import {
    ApplicationAction,
    MEMBERS_ACTIONS,
    INIT_STATE
} from '../actions/application.action';

const ACTIONS = [
    MEMBERS_ACTIONS.FECTCH_MEMBERS,
    MEMBERS_ACTIONS.FECTCH_MEMBERS_SUCCESS,
    MEMBERS_ACTIONS.FECTCH_MEMBERS_ERROR,
    MEMBERS_ACTIONS.CREATE_MEMBERS,
    MEMBERS_ACTIONS.CREATE_MEMBERS_SUCCESS,
    MEMBERS_ACTIONS.CREATE_MEMBERS_ERROR,
]
export function customersReducer(state = INIT_STATE, action: ApplicationAction): ApplicationAction {
    if (lodash.includes(ACTIONS, action.type)) {
        return Object.assign(action);
    } else {
        return state;
    }
}