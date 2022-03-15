import Phaser from 'phaser';
import { JASON_MASK } from '../armario/constants';
import { setMask } from '../../../data/player/action';
import { NO_MENU } from '../../constants';
export const SKIN_MENU = 'SKIN_MENU';

export default class SkinMenu {
    constructor(scene, state, player) {
        this.scene = scene;
        this.display = false;
        this.type = NO_MENU;
        const {width} = scene.scale;
        this.container = scene.add.container(width + 700, -15).setDepth(99);

        const panel = scene.add.nineslice(
            0, 100,
            650, 650,
            SKIN_MENU, 0
        ).setOrigin(1, 0)
        panel.setScrollFactor(0);
        this.container.setScrollFactor(0);
        this.text = this.scene.add.text(
            -panel.width + 215,
            150,
            'Skins Menu',
            {
                color: 'black',
                fontSize: 28
            }
        )

        panel.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                this.setSkin(state, player);
            })

        this.container.add(panel);
        this.container.add(this.text);
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
        this.type = NO_MENU;
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width + 700,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
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