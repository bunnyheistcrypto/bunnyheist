import { BOX } from '../../constants';
import boxImg from '../../assets/boxTest.png';
import lifeBar from '../../assets/lifeBar.png';

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
        this.onMap = false;
        this.energy = {}
    }

    preLoad () {
        this.scene.load.image(BOX, boxImg);
        this.scene.load.image('life', lifeBar);
    }


    setSprite (state) {
        if (state.player.playerInfo.box && !this.onMap) {
            this.onMap = true;
            this.self.energy1 = this.scene.add.image(32, 32, 'life');
            this.self.energy1.setScrollFactor(0);
            this.self.energy1.displayHeight = 60;
            this.self.energy1.displayWidth = 40;

            this.self.energy2 = this.scene.add.image(52, 32, 'life');
            this.self.energy2.setScrollFactor(0);
            this.self.energy2.displayHeight = 60;
            this.self.energy2.displayWidth = 40;


            this.self.sprite = this.scene.add.image(BOX_POSITION_X, BOX_POSITION_Y, BOX);
            this.self.sprite.displayHeight = BOX_HEIGHT;
            this.self.sprite.displayWidth = BOX_WIDTH;
            this.self.sprite.setInteractive();
        }
    }
}