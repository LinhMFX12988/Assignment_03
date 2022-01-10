import { STAFFS } from "../shared/staffs";
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    console.log('staff', state)
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            staff.id = state.length;
            staff.image = '.../public/assets/images/alberto.jpg';
            return state.concat(staff);
        default:
            return state;
    }
}