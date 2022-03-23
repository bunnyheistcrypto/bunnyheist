import Phaser from 'phaser';
import { NFT_MENU } from '../../constants';
import nftMenu from '../../assets/ui/f.png';
import { JASON_MASK } from '../armario/constants';
import { setMask } from '../../../data/player/action';
import SkinMenu from './skinMenu';
export const SKIN_MENU = 'SKIN_MENU';


export default class Menu {
    constructor(scene) {
        this.scene = scene;
        this.container = {}
        this.display = false;
        this.skinMenu = null;
        this.text = null;
    }

    preLoad () {
        this.scene.load.image(NFT_MENU, nftMenu);
        this.scene.load.image(SKIN_MENU, nftMenu);
    }

    setSprite (state, player) {
        this.skinMenu = new SkinMenu(this.scene, state, player);
    }
}