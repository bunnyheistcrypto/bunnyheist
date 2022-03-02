import { BOX_HEIGHT, BOX_POSITION_X, BOX_POSITION_Y, BOX_WIDTH } from './constants';

import { MESA_POSITION_X, MESA_POSITION_Y, MESA_WIDTH, MESA_HEIGHT } from '../mesaCentro/constants';
import { PLAYER_WIDTH } from '../../player/constants';

export const boxCollider = (x, y, state) => {
    // return state.player.playerInfo.box ? proximityCollider({x, y}, BOX_POSITION_X, BOX_POSITION_Y, BOX_WIDTH, BOX_HEIGHT) : false;
    return false;
}

export const mesaCollider = (x, y) => {
    return (
            x + PLAYER_WIDTH + 75 >= MESA_POSITION_X &&
            x + 110 <= MESA_POSITION_X + MESA_WIDTH
        ) && (
            y >= MESA_POSITION_Y - 155 &&
            y <= MESA_POSITION_Y + 50
        )

}