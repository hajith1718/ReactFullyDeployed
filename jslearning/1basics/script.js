const likesProgramming = true;
const salary = 50000;
const city = null;
let futureJob;
console.log(typeof likesProgramming);
console.log(typeof salary);
console.log(typeof city);
console.log(typeof futureJob);

const a = 10;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 === 10);
console.log(10 !== 5);

//--------------------------------------------------------------------------------------------------------------------------
//excersice1
const myage=22;
const frdage=25;
console.log(myage>frdage);
console.log(myage<frdage);
console.log(myage===frdage);

//excersice2
const grade = 85;
if (grade >= 90) {
    console.log("A+");
} else if (grade >= 80) {
    console.log("A");
} else if (grade >= 70) {
    console.log("B");
} else if (grade >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}
//--------------------------------------------------------------------------------------------------------------------------
//loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//--------------------------------------------------------------------------------------------------------------------------
//Arrays
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Grapes");
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//forEach
fruits.forEach(fruit => {
    console.log(fruit);
});

//Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => {
    return number * 2;
});
console.log(doubled);

//Filter
const numberss = [10, 20, 30, 40, 50];
const result = numberss.filter(number => number > 25);
console.log(result);

//Find
const find = numberss.find(number => number > 25);
console.log(find);

//some
const some = numberss.some(number => number > 25);
console.log(some);

//every
const every = numberss.every(number => number > 5);
console.log(every);

//reduce
const total = numberss.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);