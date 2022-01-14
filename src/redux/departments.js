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

        console.log("index:", state.findIndex(departmentIndex));
      return state[state.findIndex(departmentIndex)].numberOfStaff += 1;
    default:
      return state;
  }
};
