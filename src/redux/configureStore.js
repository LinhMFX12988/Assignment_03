import { createStore } from 'redux';
import { Reducer, initiaState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initiaState
    );

    return store;
}