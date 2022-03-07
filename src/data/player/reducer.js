import { assign } from 'lodash';
import { SET_PLAYER_INFO, SET_PLAYER_WALLET, SET_BODY, SET_HAND, SET_HEAD, SET_MASK } from './action';

export const initialState = {
    wallet: true,
    playerInfo: {},
    isLoadingPlayerInfo: false,
    playerAssets: null,
    isLoadingPlayerAssets: false,
    mask: null,
    head: null,
    body: null,
    hand: null,
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
        case SET_MASK: 
            return action.info 
                ? assign({}, state, { mask: action.info })
                : state;
        case SET_HEAD: 
            return action.info 
                ? assign({}, state, { head: action.info })
                : state;
        case SET_BODY: 
            return action.info 
                ? assign({}, state, { body: action.info })
                : state;
        case SET_HAND: 
            return action.info 
                ? assign({}, state, { hand: action.info })
                : state;
        default:
            return state;
    }
}