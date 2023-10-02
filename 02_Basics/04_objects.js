// const tinderUser = new Object() //op=> {}
const tinderUser = {}; // op=>{} but only deff is this is not singleton object 

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ranjeet",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} this is target and rest all is sourse  // good way

const obj3 = { ...obj1, ...obj2 }; // best way
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

//console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] sare key liya or usko ek aray me rakh diya ab aap array ka sara pro use kar sakte h iss pe
//console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ask isLoggedIn pro do you have ?

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Ranjeet",
};

// course.courseInstructor

// object destructuring 
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);


// API / JSON
// {
//     "name": "Ranjeet",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API aise bhi milte h
[{}, {}, {}];
