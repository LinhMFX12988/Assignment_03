import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    console.log('NEWSTAFF: ' +  JSON.stringify(action.payload));
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            staff.id = state.length;
            staff.image = '.../public/assets/images/alberto.jpg';
            staff.department = DEPARTMENTS.filter(x => x.id === action.payload.department)[0]
            return state.concat(staff);
        default:
            return state;
    }
}