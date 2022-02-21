import { PLAYER_WIDTH } from "../player/constants";

export const proximity = (player, objectX, objectY) => {
    if(
        (player.x+80 >= objectX &&  player.x <= objectX + 80) &&
        (player.y+50 >= objectY &&  player.y <= objectY + 50)
    ) {
        return true;
    }
    return false;
}

export const proximityCollider = (player, objectX, objectY, objectW, objectH) => {
    return (
        (player.x + PLAYER_WIDTH - 5 >= objectX &&  player.x + 35 <= objectX + objectW) &&
        (player.y + 60 <= objectY + objectH && player.y >= objectY - objectH)
    );
}