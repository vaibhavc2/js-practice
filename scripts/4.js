const prompt = require('prompt-sync')();

const n = Math.floor((Math.random() * 10) + 1);


let x = 0, y = 10;

while (y > 0) {
    x = parseInt(prompt('Enter a number: '));
    if (x == n) {
        console.log(`Correct Guess! It is indeed ${x}.`);
        break;
    }
    else if (x < n) {
        console.log('Chosen number is less than the Number.');
    }
    else {
        console.log('Chosen number is greater than the Number.');
    }
    --y;
}