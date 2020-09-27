import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

let bloopOne: p5.SoundFile;

export function preBloop(p: p5): void {
    const loadSound = (path: string) => ((p as any) as p5.SoundFile).loadSound(path);
    bloopOne = loadSound('../audio/bloop1.mp3');
}

export function playBloop(): void {
    bloopOne.play();
}