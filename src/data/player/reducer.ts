import { assign, keyBy } from 'lodash';
import { SET_PLAYER_WALLET, SET_BODY, SET_HAND, SET_HEAD, SET_MASK, SET_PLAYER, REQUESTING_INVENTARIO, RECEIVE_INVENTARIO, REQUESTING_INVENTARIO_FAILED } from './action';

export const initialState = {
    wallet: true,
    playerInfo: {},
    isLoadingInventario: false,
    inventarioById: null,
    mask: null,
    head: null,
    body: null,
    hand: null,
}

export const playerReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case REQUESTING_INVENTARIO:
            return action.info
                ? assign({}, state, { isLoadingInventario: true })
                : state;
        case RECEIVE_INVENTARIO:
            return action.info
                ? assign({}, state, { isLoadingInventario: false, inventarioById: keyBy(action.info, 'itemId') })
                : state;
        case REQUESTING_INVENTARIO_FAILED:
            return action.info
                ? assign({}, state, { isLoadingInventario: false })
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
        case SET_PLAYER:
            return action.info 
            ? assign({}, state, { player: action.info })
            : state;
        case SET_PLAYER:
            return action.info 
            ? assign({}, state, { player: action.info })
            : state;
        default:
            return state;
    }
}