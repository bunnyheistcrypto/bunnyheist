import { BOX, PLAYER } from "../constants";

export const ActionsBase = (game, object) => {
    switch(object.texture.key){
        case PLAYER:
            alert('Clicou no jogador');
            return true;
        case BOX:
            alert('Clicou na caixa');
            return true;
        default:
            return false;
    }
}