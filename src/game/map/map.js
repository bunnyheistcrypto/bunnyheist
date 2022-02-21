import mapImg from '../assets/map.png';
import { MAP } from '../constants';
import Box from '../objects/box/box';

export default class Map {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.box = new Box(scene);
    }

    preLoad (nft_menu) {
        this.scene.load.image(MAP, mapImg);
        this.box.preLoad(nft_menu);
    }

    setSprite () {
        this.self.sprite = this.scene.add.image(0, 0, MAP);
        this.box.setSprite('test');
    }

    gameRuning (state) {
        // this.box.setSprite(state);
    }
}
