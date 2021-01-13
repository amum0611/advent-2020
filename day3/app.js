import { readFileSync } from 'fs';

let input = readFileSync('input-files/day3.txt')
                .toString('utf-8')
                .split('\n')
                .filter(x => x);

const slopes = [
    {down: 1, right: 1},
    {down: 1, right: 3},
    {down: 1, right: 5},
    {down: 1, right: 7},
    {down: 2, right: 1}
];

let numberOfTreesInEachSlop = [];

slopes.forEach(slope => {
    console.log(slope);
    let numberOfTrees = 0;
    let stepRight = 0;
    for (let stepDown = slope.down; stepDown < input.length; stepDown = stepDown + slope.down) {
        const path = input[stepDown];
        stepRight = (stepRight + slope.right) < path.length 
                        ? (stepRight + slope.right) 
                        : slope.right - (path.length - stepRight);
        if (path[stepRight] === '#') {
            numberOfTrees++;
        }
    } 
    numberOfTreesInEachSlop.push(numberOfTrees)
});

let multiply = numberOfTreesInEachSlop.reduce((x, y) => x * y);
console.log(`Part1 => Number of trees in slope {down: 1, right: 3}: ${numberOfTreesInEachSlop[1]}`)
console.log(`Part2 => Number of trees in each slope mutiplied by each other: ${multiply}`)