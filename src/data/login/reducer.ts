import { assign } from 'lodash';
import { REQUEST_USER, UserAction } from "./action";
import { UserState } from "./types";

const initialState = {
    walletId: null,
    chavePublica: null,
    frase: null,
    saldo: 0,
    token: null,
    isLoadingUser: false,
}

export const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch(action.type) {
        case REQUEST_USER:
            return assign(state, { isLoadingUser: true });
        default: 
            return state;
    }
    
}