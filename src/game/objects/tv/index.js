import Phaser from 'phaser';
import { INTERGALATIC_TV } from '../../constants';
import objectImg from '../../assets/intergalatic-tv.png';

import { TV_HEIGHT, TV_POSITION_X, TV_POSITION_Y, TV_WIDTH } from './constants';

export default class IntergalaticTv {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(INTERGALATIC_TV, objectImg);
    }

    setSprite (state) {
        this.self.sprite = this.scene.add.image(TV_POSITION_X, TV_POSITION_Y, INTERGALATIC_TV);
        this.self.sprite.displayHeight = TV_HEIGHT;
        this.self.sprite.displayWidth = TV_WIDTH;
 
        this.self.sprite.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.self.sprite.setTint(0xe0e0e0)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.self.sprite.setTint(0xffffff)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                this.nft_menu.display ? this.nft_menu.hide() : this.nft_menu.show();
            })
    }
}