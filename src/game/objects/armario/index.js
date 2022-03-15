import Phaser from 'phaser';
import { ARMARIO } from '../../constants';
import objectImg from '../../assets/armario.png';

import { ARMARIO_HEIGHT, ARMARIO_POSITION_X, ARMARIO_POSITION_Y, ARMARIO_WIDTH, JASON_MASK } from './constants';
import { setMask } from '../../../data/player/action';

export default class Armario {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
        this.state = null;
        this.maskSwitch = false;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(ARMARIO, objectImg);
    }

    setSprite (reducer, player) {
        this.self.sprite = this.scene.add.image(ARMARIO_POSITION_X, ARMARIO_POSITION_Y, ARMARIO);
        this.self.sprite.displayHeight = ARMARIO_HEIGHT;
        this.self.sprite.displayWidth = ARMARIO_WIDTH;
 
        this.self.sprite.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.self.sprite.setTint(0xe0e0e0)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.self.sprite.setTint(0xffffff)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                console.log(this.nft_menu.type);
                if (this.nft_menu.type === 'None' || this.nft_menu.type === ARMARIO) {
                    this.nft_menu.type = ARMARIO;
                    this.nft_menu.display ? this.nft_menu.hideTest() : this.nft_menu.showTest();
                };
            })
    }

    setSkin (reducer, player) {
        const state = reducer.getState();
        if (this.maskSwitch) {
            reducer.dispatch(setMask(null));
            player.setMask(null);
            this.maskSwitch = false;
        } else {
            reducer.dispatch(setMask(JASON_MASK));
            player.setMask(JASON_MASK);
            this.maskSwitch = true;
        }
    }
}