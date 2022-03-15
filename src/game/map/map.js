import mapImg from '../assets/BACKGROUND.png';
import { MAP } from '../constants';
import Board from '../objects/board/board';
import MesaCentro from '../objects/mesaCentro/mesaCentro';
import GunStation from '../objects/gunStation/gunStation';
import Workout from '../objects/workout';
import IntergalaticTv from '../objects/tv';
import Armario from '../objects/armario';
import BedMirror from '../objects/bed';


export default class Map {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.mesaCentro = new MesaCentro(scene);
        this.bluePrint = new Board(scene);
        this.gunStation = new GunStation(scene);
        this.workout = new Workout(scene);
        this.intergalaticTv = new IntergalaticTv(scene);
        this.armario = new Armario(scene);
        this.bedMirror = new BedMirror(scene);

    }

    preLoad (all_menus) {
        this.scene.load.image(MAP, mapImg);
        this.mesaCentro.preLoad(all_menus.menu);
        this.bluePrint.preLoad(all_menus.menu);
        this.gunStation.preLoad(all_menus.menu);
        this.workout.preLoad(all_menus.menu);
        this.intergalaticTv.preLoad(all_menus.menu);
        this.armario.preLoad(all_menus.menu);
        this.bedMirror.preLoad(all_menus.menu);

    }

    setSprite (reducer, player) {
        this.self.sprite = this.scene.add.image(0, 0, MAP);
        this.self.sprite.displayHeight = 800;
        this.self.sprite.displayWidth = 1200;
        this.self.sprite.setOrigin(0);
        this.mesaCentro.setSprite('Testando');
        this.bluePrint.setSprite('La La La');
        this.gunStation.setSprite('La La La');
        this.workout.setSprite('La La La');
        this.intergalaticTv.setSprite('La La La');
        this.armario.setSprite(reducer, player);
        this.bedMirror.setSprite('La La La');
    }
}
