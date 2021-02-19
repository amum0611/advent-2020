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

let checkRequiredData = passport => {
    return passport['byr'] && passport['iyr'] && passport['eyr'] && passport['hgt'] && passport['hcl'] && passport['ecl'] && passport['pid'];
};

let passports = readFileSync('input-files/day4.txt')
                .toString('utf-8')
                .split('\n\n')
                .filter(x => x)
                .map(x => parsePassport(x));

let validPassportCount = 0;

// Part1
passports.forEach(passport => {
    if (checkRequiredData(passport)) {
        validPassportCount++;
    }
});

console.log(`Part1 => Valid Passports: ${validPassportCount}`)

let validate = (k, v) => {
    let hgtValue;
    switch (k) {
        case 'byr':
            return v >= 1920 && v <= 2002;
        case 'iyr':
            return v >= 2010 && v <= 2020;
        case 'eyr':
            return v >= 2020 && v <= 2030;
        case 'hgt':
            if (hgtValue = /^([\d.]+)cm$/.exec(v)) {
                return hgtValue[1] >= 150 && hgtValue[1] <= 193;
            };
            if (hgtValue = /^([\d.]+)in$/.exec(v)) {
                return hgtValue[1] >= 59 && hgtValue[1] <= 76;
            };
            return false;
        case 'hcl':
            return /^#[0-9a-f]{6}$/.test(v);
        case 'ecl':
            return /(amb|blu|brn|gry|grn|hzl|oth)/.test(v);
        case 'pid':
            return /^[0-9]{9}$/.test(v);
        case 'cid':
            return true;
        default:
            return false;
    }
};

let validatePassport = passport => {
    for (const [key, value] of Object.entries(passport)) {
        if(validate(key, value) === false) {
            return false;
        }
    }
    return true;
};

let validPassportCountPart2 = 0;

passports.forEach(passport => {
    if (checkRequiredData(passport) && validatePassport(passport)) {
        validPassportCountPart2++;
    }
});


console.log(`Part2 => Valid Passports: ${validPassportCountPart2}`)