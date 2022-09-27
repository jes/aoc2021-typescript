import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
});

let onecount: number[] = [];
let total: number = 0;

rl.on('line', (l: string) => {
    const chars: string[] = l.split("");
    chars.forEach((c: string, i: number) => {
        if (i >= onecount.length) onecount.push(0);
        if (c == '1') onecount[i]++;
    });
    total++;
});

rl.on('close', () => {
    let gamma: number = 0;
    let epsilon: number = 0;
    onecount.forEach((cnt: number) => {
        gamma *= 2;
        epsilon *= 2;
        if (cnt > total/2) gamma++;
        else epsilon++;
    });
    console.log(gamma * epsilon);
});
