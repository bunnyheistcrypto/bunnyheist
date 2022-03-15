import Phaser from 'phaser';
import { SKIN_MENU } from '../../constants';
import nftMenu from '../../assets/ui/f.png';

export default class SkinMenu {
    constructor(scene) {
        this.scene = scene;
        this.container = {}
        this.display = false;
    }

    preLoad () {
        this.scene.load.image(SKIN_MENU, nftMenu);
    }

    show () {
        this.display = true;
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width - 300,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    hide () {
        this.display = false;

        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width + 700,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    setSprite (state) {
        const {width} = this.scene.scale;

        this.container = this.scene.add.container(width + 700, -15).setDepth(99);

        const panel = this.scene.add.nineslice(
            0, 100,
            650, 650,
            SKIN_MENU, 0
        ).setOrigin(1, 0)
        panel.setScrollFactor(0);
        this.container.setScrollFactor(0);

        const text = this.scene.add.text(
            -panel.width + 35,
            250,
            'Tetstando',
            {
                color: 'black',
                fontSize: 28
            }
        )

        panel.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                alert('oi');
            })

        this.container.add(panel);
        this.container.add(text);
    }
}