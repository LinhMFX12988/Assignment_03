import { STAFFS, ROLE, DEPARTMENTS } from "../shared/staffs";

export const initiaState = {
    staffs: STAFFS,
    departments: DEPARTMENTS,
    role: ROLE
};

export const Reducer = (state = initiaState, action) => {
    return state;
};