import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { drops, RainDrop } from './Particles';

const Rain = (): React.ReactElement => {
    function setup(p5: p5Types, elementCanvas: Element): void {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(elementCanvas);
    }

    function draw(p5: p5Types): void {
        p5.background(255);

        for (let i = 0; i < p5.random(44); i += 1) {
            drops.push(new RainDrop(p5));
        }

        for (let i = 0; i < drops.length; i += 1) {
            const drop = drops[i];
            drop.fall();
            drop.show();
        }
    }

    return (
        <Sketch
            setup={setup}
            draw={draw}
        />
    );
}

export default Rain;
