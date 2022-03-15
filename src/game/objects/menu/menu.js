import Phaser from 'phaser';
import { NFT_MENU } from '../../constants';
import nftMenu from '../../assets/ui/f.png';
import { JASON_MASK } from '../armario/constants';
import { setMask } from '../../../data/player/action';

export default class Menu {
    constructor(scene) {
        this.scene = scene;
        this.container = {}
        this.container2 = {}
        this.display = false;
        this.type = 'None';
        this.panel = {};
        this.text = {};
    }

    preLoad () {
        this.scene.load.image(NFT_MENU, nftMenu);
    }

    show () {
        if (!this.display) {
            this.display = true;
            const {width} = this.scene.scale;

            this.scene.tweens.add({
                targets: this.container,
                x: width - 300,
                duration: 300,
                ease: Phaser.Math.Easing.Sine.InOut
            })
        }
    }

    hide () {
        this.display = false;
        this.type = 'None';
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width + 700,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    showTest () {
        this.display = true;
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container2,
            x: width - 300,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    hideTest () {
        this.display = false;
        this.type = 'None';
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container2,
            x: width + 700,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    setSprite (state, player) {
        const {width} = this.scene.scale;

        this.container = this.scene.add.container(width + 700, -15).setDepth(99);

        this.panel = this.scene.add.nineslice(
            0, 100,
            650, 650,
            NFT_MENU, 0
        ).setOrigin(1, 0)
        this.panel.setScrollFactor(0);
        this.container.setScrollFactor(0);

        this.text = this.scene.add.text(
            -this.panel.width + 250,
            150,
            'Blueprint',
            {
                color: 'black',
                fontSize: 28
            }
        )

        this.panel.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                // alert('oi');
            })

        this.container.add(this.panel);
        this.container.add(this.text);

        this.container2 = this.scene.add.container(width + 700, -15).setDepth(99);

        this.panel = this.scene.add.nineslice(
            0, 100,
            650, 650,
            NFT_MENU, 0
        ).setOrigin(1, 0)
        this.panel.setScrollFactor(0);
        this.container.setScrollFactor(0);

        this.text = this.scene.add.text(
            -this.panel.width + 215,
            150,
            'Menu de skins',
            {
                color: 'black',
                fontSize: 28
            }
        )

        this.panel.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                this.setSkin(state, player);
            })

        this.container2.add(this.panel);
        this.container2.add(this.text);
    }

    setSkin (reducer, player) {
        const state = reducer.getState();
        if (this.maskSwitch) {
            reducer.dispatch(setMask(null));
            player.setMask(null);
            this.maskSwitch = false;
        } else {
            reducer.dispatch(setMask(JASON_MASK));
            player.setMask(JASON_MASK);
            this.maskSwitch = true;
        }
    }
}