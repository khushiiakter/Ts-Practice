{

// spread operators. --> array ba object er element gulo ke copy kore use kora. ...

const friend1: String[] = ["khushi", "akter"];
const friend2: string[] = ["veera"];

//friend1.push(friend2);//[ 'khushi', 'akter', [ 'veera' ] ]
friend1.push(...friend2); //[ 'khushi', 'akter', 'veera' ] -- add element to the last .
// friend1.pop();remove last element

friend1.shift(); //remove first element

// console.log(friend1);

const mentor1: {
  a: number;
  b: number;
  c: number;
} = {
  a: 2,
  b: 31,
  c: 5,
};

const mentor2: {
  d: number;
  e: number;
  f: number;
} = {
  d: 3,
  e: 4,
  f: 5,
};

const mentorList = {
  ...mentor1,
  ...mentor2,
};
// console.log(mentorList);

// spread operator can be used to merge two objects or arrays.copy/mix korte use kora hoy.
// it can also be used to copy the properties of one object to another object.

//rest operator --> function er parameter e use kora hoy. jekhane amra chai , function er parameter e anek gulo value pass korte pari. tokhn rest operator use korte hoy. rest operator use korle, amra ekta array pabo, jekhane sokol value gulo thakbe.

//rest operator example
// function addNumbers(...numbers: number[]): number {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// const result = addNumbers(1, 2, 3, 4, 5); // pass any number of arguments
// console.log(result); // Output: 15

//function e argument hisebe friend er nam jabe, amk sob friend der greetings korte hobe, hi friend er nam likha lagbe.
//                       *ATA rest operator , new array hocche friends name ,
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`Hi ${friend}.`));
};

// greetFriends("khusi", "veer", "resma");

// const sumOfNumber = (...numbers: number[]) => {
//   let sum1: number = 0;
//   numbers.forEach((number) => {
//     sum1 = sum1 + number;
    
//   });return sum1;
// };

// console.log(sumOfNumber(2, 2, 3));

const sumOfNumber = (...numbers: number[]) => {
  let sum1: number = 0;
  numbers.forEach((number) => {
    console.log(number);
    
  })
};

// sumOfNumber(2, 2, 3,44,55,55);

// destructuring

const user: {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
        social: {
            fb: string;
            yt: {
                followers: {
                    a1: string;
                    b1: string;
                };
                channelName: string;
            };
        };
    };
    contactNo: string;
    address: string;
} = {
  id: 345,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Persian",
    social:{
        fb:"facebook",
        yt:{
            followers: {
                a1: "aaa",
                b1:"bbbb"
            },
            channelName: "MR Beast"
        }
    }
  },
  contactNo: "0170000000",
  address: "Uganda",
};
const {name:{social:{yt:{followers:{a1,b1}}}}} = user; // destructuring er moddhe type describe kora jay nah.
//destructuring korar somoy, jokhon akta property object type thakle , tar moddhe thaka nested value pete hole amder oi property:{nested value}
// const {contactNo, name:{firstName, social:{yt:{followers, channelName}}}} = user; 

// console.log(a1,b1);


// array destructuring 
const human : number[] =[2,5,6,7]
const [x, , ...y] = human;

console.log(x,y);











}