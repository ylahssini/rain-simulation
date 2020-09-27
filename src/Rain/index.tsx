/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { preBloop, playBloop } from './Bloops';
import { drops, RainDrop } from './Particles';

const Rain = (): React.ReactElement | null => {
    const p5Ref: React.MutableRefObject<HTMLDivElement | undefined> = useRef();

    function sketch(p: p5) {
        p.preload = (): void => {
            preBloop(p);
        };

        p.setup = (): void => {
            p.createCanvas(p.windowWidth, p.windowHeight);
        }

        p.draw = (): void => {
            p.background(255);

            for (let i = 0; i < p.random(44); i += 1) {
                drops.push(new RainDrop(p, playBloop));
            }

            for (let i = 0; i < drops.length; i += 1) {
                const drop = drops[i];
                drop.fall();
                drop.show();
            }
        }
    }

    useEffect(() => {
        new p5(sketch, p5Ref.current)
    }, []);

    if (!p5Ref) {
        return null;
    }

    return (
        <></>
    );
}

export default Rain;
