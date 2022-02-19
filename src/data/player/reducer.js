import { assign, includes, uniq } from 'lodash';
import { SET_PLAYER_INFO } from './action';

export const initialState = {
    playerInfo: null,
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
        default:
            return state;

    }
}