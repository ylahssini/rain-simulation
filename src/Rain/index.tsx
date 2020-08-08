import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { RainDrop } from './Particles';

const drops = new Array(600);

const Rain = (): React.ReactElement => {


    function setup(p5: p5Types, elementCanvas: Element): void {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(elementCanvas);
        
        for(let i = 0; i < drops.length; i += 1) {
            drops[i] = new RainDrop(p5);
        }
    }

    function draw(p5: p5Types): void {
        p5.background(255);

        for (let i = 0; i < drops.length; i += 1) {
            drops[i].fall();
            drops[i].show();
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
