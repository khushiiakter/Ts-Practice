//ts k ki amra runtime e pabo?j
// - na. amra ts ke run i korbo nh. amra ts k, compile kore js e rupantor korbo. then setak browser ba node js diye run korbo .

// amra run time js er type pabo . ts ar nh. tahole ts amder help korse-
//jokhon amra code korbo , code gulo jokhon compile hobe  , thokhon ts amder type checking e help kortese.

//number - type
let a : number= 13;

//string 
let myName : string = "khushi";

//boolean

let isPass: boolean = true;

let x: undefined = undefined;
let y:null = null;

//Array - array declare korte gele , type er pashe [] array sign dite hobe .
let friends: string[]  = ["khushi", "akter"];

let age: number[]= [1,2,3];


//tuple - holo bishesh typeof array , jekhane order ta maintain kora hoy. array ar value er type er order maintain korte hobe, jokhon type declare korbe oi array er box ai -[aikhane --> order wise likhte hobe]

let ageName: [string, number, boolean] = ["khushi", 22, true];

// ageName[0]= 33;Type 'number' is not assignable to type 'string'.ts(2322)
ageName[0] = "hena";

console.log(a);
console.log(ageName[2]);