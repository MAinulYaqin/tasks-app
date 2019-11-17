import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import tasks from './reducers/tasks';

const reducers = combineReducers({ tasks });

const store = createStore(reducers, applyMiddleware(logger));

export default store;
