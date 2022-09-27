import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
});

let depth: number = 0;
let horiz: number = 0;
let aim: number = 0;

rl.on('line', (l: string) => {
    const parts: string[] = l.split(" ");
    const dir: string = parts[0];
    const dist: number = parseInt(parts[1]);

    if (dir == 'down') aim += dist;
    else if (dir == 'up') aim -= dist;
    else if (dir == 'forward') {
        horiz += dist;
        depth += aim * dist;
    } else throw new Error(`unrecognised direction: ${dir}`);
});

rl.on('close', () => {
    console.log(depth * horiz);
});
