import { UserState } from "./types";

export const getUser = (state: any): UserState => {
    return state.user;
}