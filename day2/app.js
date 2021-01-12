import { readFileSync } from 'fs';

let input = readFileSync('input-files/day2.txt')
                .toString('utf-8')
                .split('\n');

const regEx = / |-|:/g;

let validPasswordPart1 = 0;
let validPasswordPart2 = 0;
input.forEach(e => {

    let data = e.split(regEx).filter(x => x != ''); // yeilds -> [ '7', '8', 'r', 'qwrvqvqhs' ]

    // Part 1
    let regExp = new RegExp(data[2], 'g');
    let matchingCount = data[3].match(regExp);

    if (matchingCount != null && matchingCount.length >= parseInt(data[0]) && matchingCount.length <= parseInt(data[1])) {
        validPasswordPart1++;
    }

    // Part 2
    // Since the data[2] should match only with one of the position in the password, I used xor boolean logic using with Bitwise XOR (^) operator.
    if (data[3][data[0] - 1] === data[2] ^ data[3][data[1] - 1] === data[2]) {
        validPasswordPart2++;
    }
});

console.log(`Part1 => Number of valid password: ${validPasswordPart1}`)
console.log(`Part2 => Number of valid password: ${validPasswordPart2}`)