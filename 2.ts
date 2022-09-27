import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
});

let depth: number = 0;
let horiz: number = 0;

rl.on('line', (l: string) => {
    const parts: string[] = l.split(" ");
    const dir: string = parts[0];
    const dist: number = parseInt(parts[1]);

    if (dir == 'down') depth += dist;
    else if (dir == 'up') depth -= dist;
    else if (dir == 'forward') horiz += dist;
    else throw new Error(`unrecognised direction: ${dir}`);
});

rl.on('close', () => {
    console.log(depth * horiz);
});
