import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
});

let nums: number[] = [];

rl.on('line', (l: string) => {
    const n: number = parseInt(l);
    nums.push(n);
});

function sum3(i: number): number {
    return nums[i] + nums[i+1] + nums[i+2];
}

rl.on('close', () => {
    let count: number = 0;
    for (let i: number = 0; i < nums.length-3; i++) {
        if (sum3(i+1) > sum3(i)) count++;
    }
    console.log(count);
});
