import mapImg from '../assets/map.png';
import { MAP } from '../constants';

export default class Map {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
    }

    preLoad () {
        this.scene.load.image(MAP, mapImg);
    }

    setSprite () {
        this.self.sprite = this.scene.add.image(0, 0, MAP);
    }
}