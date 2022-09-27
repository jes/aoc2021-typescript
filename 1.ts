import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
});

let lastn: number = 1000000;
let count: number = 0;

rl.on('line', (l: string) => {
    const n: number = parseInt(l);
    if (n > lastn) count++;
    lastn = n;
});

rl.on('close', () => {
    console.log(count);
});
