import { BOX_HEIGHT, BOX_POSITION_X, BOX_POSITION_Y, BOX_WIDTH } from './constants';
import { proximityCollider } from '../utils';

export const boxCollider = (x, y, state) => {
    return state.player.playerInfo.box ? proximityCollider({x, y}, BOX_POSITION_X, BOX_POSITION_Y, BOX_WIDTH, BOX_HEIGHT) : false;
}