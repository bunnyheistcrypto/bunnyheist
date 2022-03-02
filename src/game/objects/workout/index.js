import Phaser from 'phaser';
import { WORKOUT } from '../../constants';
import objectImg from '../../assets/workout.png';

import { WORKOUT_HEIGHT, WORKOUT_POSITION_X, WORKOUT_POSITION_Y, WORKOUT_WIDTH } from './constants';

export default class Workout {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(WORKOUT, objectImg);
    }

    setSprite (state) {
        this.self.sprite = this.scene.add.image(WORKOUT_POSITION_X, WORKOUT_POSITION_Y, WORKOUT);
        this.self.sprite.displayHeight = WORKOUT_HEIGHT;
        this.self.sprite.displayWidth = WORKOUT_WIDTH;
 
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