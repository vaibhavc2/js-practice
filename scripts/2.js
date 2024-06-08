const arr = [1, 2, 3];

// console.log(arr);

// map() ,filter() and reduce() return a new array

const a = arr.map(x => {
    return x + 2;
});

console.log(a, arr);
// console.log(arr);

const b = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value * index + 7;
})

console.log(b);

const c = b.filter((value, index, array) => {
    console.log(value, index, array);
    return value > 7;
    // return value * 7; // this doesnot return 7*value, but only value.. here filter() evaluates on the basis of a condition true/false => it filters the elements!
})

console.log(c);

let d = b.reduce((x, y) => {
    return x + y;
});

d = a.concat(b, c);
console.log(d);

const multiply = (x, y) => {
    return x * y;
}

d = d.reduce(multiply);

console.log(d);

