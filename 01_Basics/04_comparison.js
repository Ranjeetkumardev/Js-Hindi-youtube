// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true
// console.log("02" > 1); // true
 
// generally avoid this type of conversion 

console.log(null > 0); // false // comparison convert null to a number and treat it as 0
console.log(null == 0); //true
console.log(null >= 0); //ture

console.log(undefined == 0);//false 
console.log(undefined > 0); //false 
console.log(undefined < 0); //false 

//  strict cheeck  === comparison k sath datatype bhi ckeck karta h

console.log("2" === 2);
