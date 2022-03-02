import Phaser from 'phaser';
import { BED_MIRROR } from '../../constants';
import objectImg from '../../assets/bed-mirror.png';

import { BED_HEIGHT, BED_POSITION_X, BED_POSITION_Y, BED_WIDTH } from './constants';

export default class BedMirror {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(BED_MIRROR, objectImg);
    }

    setSprite (state) {
        this.self.sprite = this.scene.add.image(BED_POSITION_X, BED_POSITION_Y, BED_MIRROR);
        this.self.sprite.displayHeight = BED_HEIGHT;
        this.self.sprite.displayWidth = BED_WIDTH;
 
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