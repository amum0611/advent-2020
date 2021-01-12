import { readFileSync } from 'fs';

let input = readFileSync('input-files/day1.txt')
                .toString('utf-8')
                .split("\n")
                .sort((a, b) => a - b)
                .map(a => parseInt(a));

function part1(index, target_sum) {
    for (let i = index; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            if (input[i] + input[j] === target_sum) {
                return { num1: input[i], num2: input[j] }
            } 
        }
    }
}

function part2() {
    for (let i = 0; i < input.length; i++) {
        let response2 = part1(i, 2020 - input[i])
        if (response2) {
            response2.num3 = input[i]
            return response2;
        }
    }
}

// Part 1
let response = part1(0, 2020);
console.log(`Part1 => num_1: ${response.num1}, num_2: ${response.num2}, sum:  ${response.num1 + response.num2}, answer: ${response.num1 * response.num2}`)

// Part 2
response = part2();
console.log(`Part2 => num_1: ${response.num1}, num_2: ${response.num2}, num_3: ${response.num3}, sum:  ${response.num1 + response.num2 + response.num3}, answer: ${response.num1 * response.num2 * response.num3}`)
