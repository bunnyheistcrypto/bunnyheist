import Phaser from 'phaser';
import { movePlayer } from './movement';
import { animateMovement } from './animation';
import Player from './player/player';
import Map from './map/map';
import Box from './objects/box';
import { ActionsBase } from './actions/actions';
import { PLAYER } from './constants';

let pressedKeys = [];

class MyGame extends Phaser.Scene {
  constructor() {
    super();
    this.map = new Map(this);
    this.player = new Player(this);
    this.box = new Box(this);
  }

  preload() {
    this.map.preLoad();
    this.box.preLoad();
    this.player.preLoad();
  }

  create() {
    this.map.setSprite();
    this.box.setSprite();
    this.player.setSprite();

    this.input.on('gameobjectdown', ActionsBase);
    
    this.anims.create({
      key: 'running',
      frames: this.anims.generateFrameNumbers(PLAYER),
      frameRate: 24,
      reapeat: -1,
    });

    this.input.keyboard.on('keydown', (e) => {
      if (!pressedKeys.includes(e.code)) {
        pressedKeys.push(e.code);
      }
    });
    this.input.keyboard.on('keyup', (e) => {
      pressedKeys = pressedKeys.filter((key) => key !== e.code);
    });
  }

  update() {
    this.scene.scene.cameras.main.centerOn(this.player.self.sprite.x, this.player.self.sprite.y);
    movePlayer(pressedKeys, this.player.self.sprite);
    // animateMovement(pressedKeys, this.player.self.sprite);
  }
}

export const config = {
  type: Phaser.AUTO,
  parent: 'game-here',
  width: 800,
  height: 550,
  scene: MyGame,
};