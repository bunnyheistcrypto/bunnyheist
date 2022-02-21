import Phaser from 'phaser';
import { Plugin as NineSlicePlugin } from 'phaser3-nineslice'
import { movePlayer } from './movement';
// import { animateMovement } from './animation';
import Player from './player/player';
import Map from './map/map';
import { PLAYER } from './constants';
import { connect } from 'react-redux';
import { getPlayerInfo } from '../data/player/selector';
import store from '../store';
import LifeBar from './objects/lifeBar/lifeBar';
import Menu from './objects/menu/menu';

let pressedKeys = [];

class MyGame extends Phaser.Scene {
  constructor() {
    super();
    this.reducer = store;
    this.map = new Map(this, this.reducer);
    this.player = new Player(this);
    this.life = new LifeBar(this);
    this.menu = new Menu(this);
  }

  preload() {
    this.map.preLoad(this.menu);
    this.player.preLoad();
    this.life.preLoad();
    this.menu.preLoad();
  }

  create() {
    this.map.setSprite();
    this.player.setSprite();
    this.life.setSprite();
    this.menu.setSprite();
    
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
    const state = this.reducer.getState();
    this.map.gameRuning(state);
    this.scene.scene.cameras.main.centerOn(this.player.self.sprite.x, this.player.self.sprite.y);
    movePlayer(pressedKeys, this.player.self.sprite, state);
    // animateMovement(pressedKeys, this.player.self.sprite);
  }
}

const mapStateToProps = state => ({
  playerInfo: getPlayerInfo(state),
})

export default connect(mapStateToProps, null)(MyGame)

export const config = {
  type: Phaser.AUTO,
  parent: 'game-here',
  width: 800,
  height: 550,
  plugins: {
    global: [ NineSlicePlugin.DefaultCfg ],
  },
  scene: MyGame,
};