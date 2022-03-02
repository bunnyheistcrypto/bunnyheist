import Phaser from 'phaser';
import { NFT_MENU } from '../../constants';
import nftMenu from '../../assets/ui_box.png';

export default class Menu {
    constructor(scene) {
        this.scene = scene;
        this.container = {}
        this.display = false;
    }

    preLoad () {
        this.scene.load.image(NFT_MENU, nftMenu);
    }

    show () {
        this.display = true;

        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    hide () {
        this.display = false;

        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width + 300,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })
    }

    setSprite (state) {
        const {width} = this.scene.scale;

        this.container = this.scene.add.container(width + 300 , -15);
        const panel = this.scene.add.nineslice(0, 0, 205, 100, NFT_MENU, 24).setOrigin(1, 0)
        panel.setScrollFactor(0);
        this.container.setScrollFactor(0);

        const text = this.scene.add.text(
            -panel.width + 35,
            35,
            'Tetstando',
            {
                color: 'black',
                fontSize: 28
            }
        )

        panel.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                panel.setTint(0xe0e0e0)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                panel.setTint(0xffffff)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                alert('oi');
            })

        this.container.add(panel);
        this.container.add(text);
    }
}