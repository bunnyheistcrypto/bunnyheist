import { useDispatch, useSelector } from "react-redux";
import { setPlayerInfo } from "../../data/player/action";
import { getPlayerInfo } from "../../data/player/selector";
import { BOX, PLAYER } from "../constants";
import { BOX_POSITION_X, BOX_POSITION_Y } from "../objects/box/constants";
import { proximity } from "../objects/utils";

export const ActionsBase = (game, object, reducer, player) => {
    const state = reducer.getState();
    const playerInfo = getPlayerInfo(state);

    switch(object.texture.key){
        case PLAYER:
            reducer.dispatch(setPlayerInfo({nome: 'diego', box: true}))
            return true;
        case BOX:
            if(proximity(player.self.sprite, BOX_POSITION_X, BOX_POSITION_Y)){
                console.log('funciona');
            };
            return true;
        default:
            return false;
    }
}