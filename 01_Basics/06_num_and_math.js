const score = 400;
// console.log(score); // auto in Number 

const balance = new Number(100);
// console.log(balance); // forcefully/definitely in Number 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// after decimal show only two 0/or two no

const otherNumber = 123.8966; // if in 11234.8956 op=>1123e+4

// console.log(otherNumber.toPrecision(4));//123.9 // we carefull to use 

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // op=> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // -ve in +ve and +ve also converted in +ve 
// console.log(Math.round(4.6)); // op=> 5 ,if i/n 4.3 op=> 4 i.e round of the value 
// console.log(Math.ceil(4.2)); //op=> 5 i.e ceil means top
// console.log(Math.floor(4.9)); //op=>4
// console.log(Math.min(4, 3, 6, 8)); //op=> 3
// console.log(Math.max(4, 3, 6, 8)); // op=> 8

console.log(Math.random());  // O/P always b/w 0 to 1 but random
console.log(Math.random() * 10 + 1); // O/P 1 to 9 including decimal
console.log(Math.floor(Math.random() * 10) + 1);// O/P 1 to 9 only

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
