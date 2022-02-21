import Phaser from 'phaser';
import { BOX } from '../../constants';
import boxImg from '../../assets/boxTest.png';

import {
    BOX_HEIGHT,
    BOX_POSITION_X,
    BOX_POSITION_Y,
    BOX_WIDTH
} from './constants';

export default class Box {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.onMap = true;
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(BOX, boxImg);
    }


    setSprite (state) {
        // if (state.player.playerInfo.box && !this.onMap) {
            this.onMap = true;
            
            this.self.sprite = this.scene.add.image(BOX_POSITION_X, BOX_POSITION_Y, BOX);
            this.self.sprite.displayHeight = BOX_HEIGHT;
            this.self.sprite.displayWidth = BOX_WIDTH;
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

        // }
    }
}