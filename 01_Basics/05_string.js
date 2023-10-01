const name = "Ranjeet";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
// anther way to defining the string 
const gameName = new String("Ranjeet-hc-com"); // in cosole=> op=>  0:"R",1:"a",2:"n",3:"j",4:"e",5:"e",6:"t",7:"-",8:"h",9:"c",10:"-",11:"c",12:"o",13:"m",length:14
                                    //but fir bhi array nahi ye object ye key value pair me h
// console.log(gameName[0]); // access the value
// console.log(gameName.__proto__); access the protype => op => {} => issi k ander sare fun milte h

// console.log(gameName.length); // property access 
// console.log(gameName.toUpperCase()); // function acceess but original bale ko change nahi karta h bcz stack
console.log(gameName.charAt(2));// kon se position pe kon sa char h
console.log(gameName.indexOf("t")); // ye kon se posion pe aa raha h

const newString = gameName.substring(0, 4); // negative value not allowed 
console.log(newString); // op=>Ranj i.e last bala include nahi hata h

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); //op => com

const newStringOne = "     Ranjeet     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the white space

const url = "https://Ranjeet.com/Ranjeet%20Devkumar";

console.log(url.replace("%20", "-")); // it replace %20 into '_' this

console.log(url.includes("sundar"));// to ask this is availabe or not if yes op=> true otherwise false

console.log(gameName.split("-"));// make array/splite based on '-' op=> [ 'Ranjeet', 'hc', 'com' ]
