import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../player/constants";

export const proximity = (player, objectX, objectY) => {
    if(
        (player.x+80 >= objectX &&  player.x <= objectX + 80) &&
        (player.y+50 >= objectY &&  player.y <= objectY + 50)
    ) {
        return true;
    }
    return false;
}
