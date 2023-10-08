const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// isase print key ko to sirf key hi milegi
for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
// for in loop key ko print karne par index/key (stating from 0) leta h
for (const key in programming) {
  //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
 // not iteratable for on map
// for (const key in map) {
//     console.log(key);
// }
