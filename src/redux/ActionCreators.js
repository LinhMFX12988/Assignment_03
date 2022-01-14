import * as ActionTypes from './ActionTypes';

export const addStaff = (name, doB, startDate, department, salaryScale, annualLeave, overTime) => ({
            type: ActionTypes.ADD_STAFF,
            type1: ActionTypes.UPDATE_DEPARTMENT,
            payload: {
                name: name,
                doB: doB,
                startDate: startDate,
                department: department,
                salaryScale: salaryScale,
                annualLeave: annualLeave,
                overTime: overTime
            }
});