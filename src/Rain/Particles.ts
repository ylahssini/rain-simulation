import p5 from 'p5';

interface DropInterface {
    fall: () => void;
    show: () => void;
}

export const drops: DropInterface[] = [];

export class RainDrop {
    p: p5;
    playSound: () => void;
    position: any;
    ySpeed: number;
    width: number;
    height: number;

    constructor(p: p5, playSound: () => void) {
        this.p = p;
        this.playSound = playSound;

        const y = this.p.random(-500, -50);
        this.position = this.p.createVector(this.p.random(this.p.windowWidth), y);
        this.ySpeed = this.p.random(3, 9);

        this.width = this.p.random(1, 1.5);
        this.height = this.p.random(10, 30);
    }

    fall() {
        this.position.y = this.position.y + this.ySpeed;
        this.ySpeed = this.ySpeed + 0.15;

        if (this.position.y > this.p.windowHeight) {
            this.position.y = this.p.random(-150, -200);
            this.ySpeed = this.p.random(3, 9);

            this.playSound();

            drops.splice(drops.indexOf(this), 1);
        }
    }

    show() {
        this.p.fill(0);
        this.p.rect(this.position.x, this.position.y, this.width, this.height);
    }
}
