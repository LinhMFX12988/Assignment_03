import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const Departments = (state = DEPARTMENTS, action) => {
  console.log("DEPARTMENTS:", JSON.stringify(action));
  switch (action.type1) {
    case ActionTypes.UPDATE_DEPARTMENT:
      var staff = action.payload;
      const departmentIndex = (index) => {
        return index.id === staff.department.id;
      };
        staff.numberOfStaff = state[state.findIndex(departmentIndex)].numberOfStaff += 1;
        console.log("index:", state[state.findIndex(departmentIndex)]);
      return state;
    default:
      return state;
  }
};
// data.map(el => (el.id === id ? {...el, text} : el))