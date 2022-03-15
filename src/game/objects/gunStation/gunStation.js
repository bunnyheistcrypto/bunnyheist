import Phaser from 'phaser';
import { GUN_STATION } from '../../constants';
import objectImg from '../../assets/gun-station.png';

import { GUN_STATION_HEIGHT, GUN_STATION_POSITION_X, GUN_STATION_POSITION_Y, GUN_STATION_WIDTH } from './constants';

export default class GunStation {
    constructor(scene) {
        this.scene = scene;
        this.self = {};
        this.nft_menu = null;
    }

    preLoad (nft_menu) {
        this.nft_menu = nft_menu;
        this.scene.load.image(GUN_STATION, objectImg);
    }

    setSprite (state) {
        this.self.sprite = this.scene.add.image(GUN_STATION_POSITION_X, GUN_STATION_POSITION_Y, GUN_STATION);
        this.self.sprite.displayHeight = GUN_STATION_HEIGHT;
        this.self.sprite.displayWidth = GUN_STATION_WIDTH;
        this.self.sprite.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.self.sprite.setTint(0xe0e0e0)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.self.sprite.setTint(0xffffff)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                if (this.nft_menu.type === 'None' || this.nft_menu.type === GUN_STATION) {
                    this.nft_menu.type = GUN_STATION;
                    this.nft_menu.display ? this.nft_menu.hide() : this.nft_menu.show();
                };
            })
    }
}