const acountId = 12345;
let acounEmail = "ranjeet@google.com"; // changeses is allowed
var acountPassword = "12345678";
acounCity = "Mohali"; // aisa bhi ho sakta h isase ek var ki memopry reserve kar sakte h
let acountState; // undefined -> not defined 


//acountId = 4; // not allowed bcz u can't change the value of const

acounEmail = "dev@google.com";
acountPassword = "87654321";
acounCity = "Bangloru";
console.log([acounEmail, acountPassword, acounCity]);

/* Prefer not use var
becouse of issue in vlock scope and functional scope */
