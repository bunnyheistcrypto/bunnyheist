import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { playerReducer } from './data/player/reducer';

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middleware = [...middleware, loggerMiddleware];
}

const reducer = combineReducers({
    player: playerReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(
        ...middleware,
    ),
);

export default store;