import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const Departments = (state = DEPARTMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
      var department = action.payload;
      if (department.id === action.payload.department.id) {
        department.numberOfStaff += 1;
      }
      return state.forEach(department);
    default:
      return state;
  }
};
