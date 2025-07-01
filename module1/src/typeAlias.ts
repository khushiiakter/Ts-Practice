{
// Type alias ==> type alias mane hocche, nijeder akta type create kora. jekono kisu te hole pare , string or object or anything. mane - our own personal type.

// type likhete hobe  then capital letter start kore , type name. seta onno jekono object oikhane shurute nam er pashe.

type Student ={
    name?: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}



// student1 akta object. eikhane implicit data type ase, but explicit lekha jabe. but amn jodi 100 student object info create korte hoy. tokhon bishal problem hoye jabe. tai amra , type alias use kore, nijeder bar bar lekhar kaj ta komiye nei..
const student1:Student = {
  name: "Tom",
  age: 50,
  gender: "male",
  contactNo: "0170000000",
  address: "Dhaka",
};
const student2:Student = {
  age: 50,
  gender: "male",
  contactNo: "0170000000",
  address: "Dhaka",
};
const student3:Student = {
  name: "ruhul",
  age: 50,
  gender: "male",
  address: "Dhaka",
};

type Username= string;

const myName2: Username = "khushi";

// function ar khetre

// const add6  =(num1:number, num2:number): number =>{
//     return num1 + num2;
// }; 
//

// function ar khetre = we have to declare the type like-
// type (nameof type) = (a: number, b:number)=> number.
type Add = (num1: number, num2: number) => number;

const add6:Add  = (num1, num2)=> num1* num2;
console.log(add6(3,5));





}