import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const Departments = (state = DEPARTMENTS, action) => {
  console.log('DEPARTMENTS:', JSON.stringify(action))
  switch (action.type1) {
    case ActionTypes.UPDATE_DEPARTMENT:
        var staff1 = action.payload; 
        staff1.department = state.filter(x => x.id === staff1.department)
      return state[0].numberOfStaff += 1;
    default:
      return state;
  }
};
