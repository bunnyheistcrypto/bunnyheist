import { PLAYER, PLAYER_SKIN } from '../constants';
import {
    PLAYER_SPRITE_HEIGHT,
    PLAYER_SPRITE_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_START_X,
    PLAYER_START_Y,
} from './constants';
import playerSprite from '../assets/playerFrame4.png';
import playerSkin from '../assets/skinJason.png';


export default class Player {
    constructor(scene) {
        this.scene = scene;
        this.self = {
            body: {},
            mask: {},
        };
    }

    preLoad () {
        this.scene.load.spritesheet(PLAYER, playerSprite, {
            frameWidth: PLAYER_SPRITE_WIDTH,
            frameHeight: PLAYER_SPRITE_HEIGHT,
        });
        this.scene.load.spritesheet(PLAYER_SKIN, playerSkin, {
            frameWidth: PLAYER_SPRITE_WIDTH,
            frameHeight: PLAYER_SPRITE_HEIGHT,
        });
    }

    setSprite () {
        this.self.body.sprite = this.scene.add.sprite(PLAYER_START_X, PLAYER_START_Y, PLAYER);
        this.self.body.sprite.displayHeight = PLAYER_HEIGHT;
        this.self.body.sprite.displayWidth = PLAYER_WIDTH;
        this.self.body.sprite.setDepth(1);
        
        this.self.body.sprite.setInteractive();
    }

    setMask (mask) {
        if (mask){
            this.scene.load.spritesheet(PLAYER_SKIN, playerSkin, {
                frameWidth: PLAYER_SPRITE_WIDTH,
                frameHeight: PLAYER_SPRITE_HEIGHT,
            });

            this.self.mask.sprite = this.scene.add.sprite(this.self.body.sprite.x, this.self.body.sprite.y, PLAYER_SKIN);
            this.self.mask.sprite.displayHeight = PLAYER_HEIGHT;
            this.self.mask.sprite.displayWidth = PLAYER_WIDTH;
    
            this.self.mask.sprite.setDepth(1);

            this.self.mask.sprite.flipX = this.self.body.sprite.flipX;

        } else {
            this.self.mask.sprite.destroy();
            this.self.mask.sprite = null;
        }
    }
}