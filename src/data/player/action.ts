import { ThunkAction } from "../types";
import { Item, PlayerState } from "./types";
import * as api from './api';

// @ts-check
export type PlayerAction =
    | { type: typeof REQUESTING_INVENTARIO }
    | { type: typeof RECEIVE_INVENTARIO, info: any }
    | { type: typeof REQUESTING_INVENTARIO_FAILED, errorMessages: Array<string> };

export const REQUESTING_INVENTARIO: 'REQUESTING_INVENTARIO' = 'REQUESTING_INVENTARIO';
export const requestingInventario = (): PlayerAction => ({ type: REQUESTING_INVENTARIO });

export const RECEIVE_INVENTARIO: 'RECEIVE_INVENTARIO' = 'RECEIVE_INVENTARIO';
export const receiveInventario = (info: any): PlayerAction => {
    return {
        type: RECEIVE_INVENTARIO,
        info,
    };
};

export const REQUESTING_INVENTARIO_FAILED: 'REQUESTING_INVENTARIO_FAILED' = 'REQUESTING_INVENTARIO_FAILED';
export const requestingInventarioFailed = (error: Array<string>): PlayerAction => ({
    type: REQUESTING_INVENTARIO_FAILED, errorMessages: error,
});

export const listInventario = (walletId: string, chavePublica: string): ThunkAction<PlayerState, PlayerAction> => {
    return dispatch => {
        dispatch(requestingInventario());
        return api.getInventario(walletId, chavePublica)
            .then((response: any) => {
                dispatch(receiveInventario(response));
            }, (error: any) => {
                dispatch(requestingInventarioFailed(error));
            });
    };
};

export const SET_PLAYER_WALLET = 'SET_PLAYER_WALLET';
export const setPlayerWallet = (info: any) => {
    return { type: SET_PLAYER_WALLET, info };
};

export const SET_MASK = 'SET_MASK';
export const setMask = (info: any) => {
    return { type: SET_MASK, info };
};

export const SET_HEAD = 'SET_HEAD';
export const setHead = (info: any) => {
    return { type: SET_HEAD, info };
};

export const SET_BODY = 'SET_BODY';
export const setBody = (info: any) => {
    return { type: SET_BODY, info };
};

export const SET_HAND = 'SET_HAND';
export const setHand = (info: any) => {
    return { type: SET_HAND, info };
};

export const SET_PLAYER = 'SET_PLAYER';
export const setPlayer = (player: any) => {
    return { type: SET_PLAYER, info: player };
};
