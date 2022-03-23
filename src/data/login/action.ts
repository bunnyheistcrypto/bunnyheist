import { UserState } from "./types";
import * as api from "./api";
import { ThunkAction } from "../types";


export type UserAction = 
    | { type: typeof REQUEST_USER }
    | { type: typeof RECEIVE_USER, data: UserState };

export const REQUEST_USER: 'REQUEST_USER' = 'REQUEST_USER';
export const requestUser = (): UserAction => ({ type: REQUEST_USER });

export const RECEIVE_USER: 'RECEIVE_USER' = 'RECEIVE_USER';
export const receiveUser = (data: any): UserAction => ({ type: RECEIVE_USER, data });

export const fetchUserdata = (walletId: any, chavePublica: any): ThunkAction<UserState, UserAction> => {
    return dispatch => {
        dispatch(requestUser());
        return api.postUserData(walletId, chavePublica)
            .then((response: UserState) => {
                dispatch(receiveUser(response));
            }).catch(error => {
                console.log(error);
            });
    }
}