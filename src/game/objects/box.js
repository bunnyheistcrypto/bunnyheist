import { BOX } from '../constants';
import boxImg from '../assets/boxTest.png';
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
    }

    preLoad () {
        this.scene.load.image(BOX, boxImg);
    }

    setSprite () {
        this.self.sprite = this.scene.add.image(BOX_POSITION_X, BOX_POSITION_Y, BOX);
        this.self.sprite.displayHeight = BOX_HEIGHT;
        this.self.sprite.displayWidth = BOX_WIDTH;
        this.self.sprite.setInteractive();
    }
}