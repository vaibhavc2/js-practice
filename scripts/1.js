const num = [3, 54, 1, 2, 4];
let num_string = '';

num.forEach(element => {
    num_string += element + ' ';
});

// num.map(element => {
//     console.log(element);
// });

console.log(num_string);
const num_arr = Array.from(num_string);
console.log(num);
console.log(num_arr);

for (let i of num) {
    console.log(i);
}

// for ... in Loop to print index
for (let i in num) {
    console.log(i);
}
