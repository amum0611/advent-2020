import { readFileSync } from 'fs';

let parsePassport = x => {
    let passport = {};
    //console.log(x.replace(/\n/g, ' ').split(' '));
    x.replace(/\n/g, ' ').split(' ').forEach(a => {
        let k = a.split(':');
        passport[k[0]] = k[1];
    });
    //console.log(passport);
    return passport;
};

let passports = readFileSync('input-files/day4.txt')
                .toString('utf-8')
                .split('\n\n')
                .filter(x => x)
                .map(x => parsePassport(x));

let validPassportCount = 0;

// Part1
passports.forEach(passport => {
    if (passport['byr'] && passport['iyr'] && passport['eyr'] && passport['hgt'] && passport['hcl'] && passport['ecl'] && passport['pid']) {
        validPassportCount++;
    }
});

console.log(`Part1 => Valid Passports: ${validPassportCount}`)

let validate = (k, v) => {
    switch (k) {
        case 'byr':
            return v >= 1920 && v <= 2002;
        case 'iyr':
            return v >= 2010 && v <= 2020;
        case 'eyr':
            return v >= 2020 && v <= 2030;
        case 'hgt':
            
        default:
            break;
    }
};