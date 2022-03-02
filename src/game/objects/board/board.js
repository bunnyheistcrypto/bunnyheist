import Phaser from 'phaser';
import { BLUE_PRINT } from '../../constants';
import objectImg from '../../assets/blueprint.png';

import { BLUE_PRINT_HEIGHT, BLUE_PRINT_POSITION_X, BLUE_PRINT_POSITION_Y, BLUE_PRINT_WIDTH } from './constants';

export default class Board {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(BLUE_PRINT, objectImg);
    }


    setSprite (state) {
        this.self.sprite = this.scene.add.image(BLUE_PRINT_POSITION_X, BLUE_PRINT_POSITION_Y, BLUE_PRINT);
        this.self.sprite.displayHeight = BLUE_PRINT_HEIGHT;
        this.self.sprite.displayWidth = BLUE_PRINT_WIDTH;
        // this.self.sprite.rotation += -0.37;
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