import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { playerReducer } from './data/player/reducer';
import { userReducer } from './data/login/reducer';

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middleware = [...middleware, loggerMiddleware];
}

const reducer = combineReducers({
    player: playerReducer,
    user: userReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(
        ...middleware,
    ),
);

export default store;