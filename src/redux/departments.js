import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const Departments = (state = DEPARTMENTS, action) => {
  console.log("DEPARTMENTS:", JSON.stringify(action));
  switch (action.type1) {
    case ActionTypes.UPDATE_DEPARTMENT:
      var staff = action.payload;
      return state.map(el => (el.id === staff.department.id ? {...el, numberOfStaff: (el.numberOfStaff+1)} : el));
    default:
      return state;
  }
};
