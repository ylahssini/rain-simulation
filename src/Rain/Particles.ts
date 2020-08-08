import p5Types from 'p5';

export class RainDrop {
    p5: p5Types;
    position: any;
    ySpeed: number;
    width: number;
    height: number;

    constructor(p5: p5Types) {
        this.p5 = p5;

        const y = this.p5.random(-500, -50);
        this.position = this.p5.createVector(this.p5.random(this.p5.windowWidth), y);
        this.ySpeed = this.p5.random(3, 9);

        this.width = this.p5.random(1, 1.5);
        this.height = this.p5.random(10, 30);
    }

    fall() {
        this.position.y = this.position.y + this.ySpeed;
        this.ySpeed = this.ySpeed + 0.15;

        if (this.position.y > this.p5.windowHeight) {
            this.position.y = this.p5.random(-150, -200);
            this.ySpeed = this.p5.random(3, 9);
        }
    }

    show() {
        this.p5.fill(0);
        this.p5.rect(this.position.x, this.position.y, this.width, this.height);
    }
}
