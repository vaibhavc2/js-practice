const prompt = require('prompt-sync')();

let arr = [];
// let n = parseInt(prompt('Enter no. of elements in array: '));

let inp = 0;
while (true) {
    inp = parseInt(prompt()); 
    if (inp != 0) {
        arr.push(inp);
    }
    else break;
}

const new_arr1 = arr.filter((element) => {
    return (element % 10 == 0);
})
console.log(arr, new_arr1);

const new_arr2 = new_arr1.map((val) => {
    return val * val;
})
console.log(new_arr2);