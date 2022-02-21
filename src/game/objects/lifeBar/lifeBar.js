import { LIFE_BAR } from '../../constants';
import lifeImg from '../../assets/lifeBar.png';

export default class LifeBar {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.onMap = false;
        this.energy = {}
    }

    preLoad () {
        this.scene.load.image(LIFE_BAR, lifeImg);
    }

    setSprite (state) {
        this.self.energy1 = this.scene.add.image(32, 32, LIFE_BAR);
        this.self.energy1.setScrollFactor(0);
        this.self.energy1.displayHeight = 60;
        this.self.energy1.displayWidth = 40;

        this.self.energy2 = this.scene.add.image(52, 32, LIFE_BAR);
        this.self.energy2.setScrollFactor(0);
        this.self.energy2.displayHeight = 60;
        this.self.energy2.displayWidth = 40;
    }
}