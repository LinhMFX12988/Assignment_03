import * as ActionTypes from './ActionTypes';

export const addStaff = (state = {staffs: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF:
            return {...state, staffs: action.payload};
        default:
            return state;

    }
}