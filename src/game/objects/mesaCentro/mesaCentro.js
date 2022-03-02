import Phaser from 'phaser';
import { MESA_CENTRO } from '../../constants';
import objectImg from '../../assets/control_station.png';

import { MESA_HEIGHT, MESA_POSITION_X, MESA_POSITION_Y, MESA_WIDTH } from './constants';

export default class MesaCentro {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(MESA_CENTRO, objectImg);
    }


    setSprite (state) {
        this.self.sprite = this.scene.add.image(MESA_POSITION_X, MESA_POSITION_Y, MESA_CENTRO);
        this.self.sprite.displayHeight = MESA_HEIGHT;
        this.self.sprite.displayWidth = MESA_WIDTH;
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