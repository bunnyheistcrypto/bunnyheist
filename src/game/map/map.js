import { connect, useSelector } from 'react-redux';
import { getPlayerInfo } from '../../data/player/selector';
import mapImg from '../assets/map.png';
import { MAP } from '../constants';
import Box from '../objects/box/box';

export default class Map {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.box = new Box(scene);
    }

    preLoad () {
        this.scene.load.image(MAP, mapImg);
        this.box.preLoad();
    }

    setSprite () {
        this.self.sprite = this.scene.add.image(0, 0, MAP);
    }

    gameRuning (state) {
        this.box.setSprite(state);
    }
}
