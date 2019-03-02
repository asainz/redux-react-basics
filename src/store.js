import { createStore, combineReducers } from 'redux';

import calculator from './reducers/calculator';

const reducers = combineReducers({ calculator });

const store = createStore(reducers, {});

export default store;
