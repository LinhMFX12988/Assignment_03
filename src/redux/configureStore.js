import { createStore, combineReducers } from 'redux';
import { Staffs } from './staffs';
import { Departments } from './departments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments
        })
    );

    return store;
}