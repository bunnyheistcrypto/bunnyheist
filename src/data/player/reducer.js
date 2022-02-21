import { assign } from 'lodash';
import { SET_PLAYER_INFO, SET_PLAYER_WALLET } from './action';

export const initialState = {
    wallet: true,
    playerInfo: {},
    isLoadingPlayerInfo: false,
    playerAssets: null,
    isLoadingPlayerAssets: false,
}

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYER_INFO:
            return action.info
                ? assign({}, state, { playerInfo: action.info, isLoadingPlayerInfo: false })
                : state;
        case SET_PLAYER_WALLET:
            return action.info
            ? assign({}, state, { wallet: action.info })
            : state;
        default:
            return state;
    }
}