import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from 'store/types/common';

import * as Tasks from './reducers/tasks';
import * as Food from './reducers/food';

export default function configureStore(initialState?: ApplicationState) {
    const middleware = [
        thunk
    ];

    const rootReducer = combineReducers({
        tasks: Tasks.reducer,
        food: Food.reducer,
    });

    const enhancers = [];

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
