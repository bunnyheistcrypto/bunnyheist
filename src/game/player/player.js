import { PLAYER } from '../constants';
import {
    PLAYER_SPRITE_HEIGHT,
    PLAYER_SPRITE_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_START_X,
    PLAYER_START_Y,
} from './constants';
import playerSprite from '../assets/player1.png';

export default class Player {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
    }

    preLoad () {
        this.scene.load.spritesheet(PLAYER, playerSprite, {
            frameWidth: PLAYER_SPRITE_WIDTH,
            frameHeight: PLAYER_SPRITE_HEIGHT,
        });
    }

    setSprite () {
        this.self.sprite = this.scene.add.sprite(PLAYER_START_X, PLAYER_START_Y, PLAYER);
        this.self.sprite.displayHeight = PLAYER_HEIGHT;
        this.self.sprite.displayWidth = PLAYER_WIDTH;
        this.self.sprite.setDepth(1);
        
        this.self.sprite.setInteractive();
    }
}