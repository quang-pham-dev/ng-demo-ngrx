import { INIT_APPLICATION_STATE } from '../states/application.state';
import {
    ApplicationAction,
    EMPLOYEE_ACTIONS
} from '../actions/application.action';

const ACTIONS = [
    EMPLOYEE_ACTIONS.CREATE,
    EMPLOYEE_ACTIONS.CREATE_ERROR,
    EMPLOYEE_ACTIONS.CREATE_SUCCESS,
    EMPLOYEE_ACTIONS.DELETE,
    EMPLOYEE_ACTIONS.DELETE_ERROR,
    EMPLOYEE_ACTIONS.DELETE_SUCCESS,
    EMPLOYEE_ACTIONS.GET,
    EMPLOYEE_ACTIONS.GET_ERROR,
    EMPLOYEE_ACTIONS.GET_SUCCESS,
    EMPLOYEE_ACTIONS.UPDATE,
    EMPLOYEE_ACTIONS.UPDATE_ERROR,
    EMPLOYEE_ACTIONS.UPDATE_SUCCESS,
    EMPLOYEE_ACTIONS.RESET
]
export function employeeReducer(state = INIT_APPLICATION_STATE, action: ApplicationAction): ApplicationAction {
    if (ACTIONS.includes(action.type)) {
        return action;
    } else {
        return state;
    }
}