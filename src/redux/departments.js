import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const Departments = (state = DEPARTMENTS, action) => {
  console.log('DEPARTMENTS:', state)
  switch (action.type1) {
    case ActionTypes.UPDATE_DEPARTMENT:
      
      return state.department.numberOfStaff += 1;
    default:
      return state;
  }
};
