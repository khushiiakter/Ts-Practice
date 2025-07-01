//normal function
function add(num1:number, num2:number){
    return num1 + num2;
}

// console.log(add(2,10));

const add2=(num1:number , num2:number):number=>{
    return num1 * num2;
}

// console.log(add2(5,6));

const myInfo = (a:string, b:number):string=> `${a}'s age is ${b}`;
// console.log(myInfo("khuhsi",22));

// object --> function --> method
// amra jokhon object ar modde function likhi . tokhon seta ke method bole. 
// normal mane anonymus function use korte hobe. karon amra jani, kono object theke property pete hole this keyword use korte hoy. ar arrow function e this use kora jay nnh. tai normal function use korte hobe , method e.

const poorUser:{
    myName: string;
    balance: number;
    addbalance: Function;
} = {
    myName: "khushi",
    balance: 2000,
    addbalance(newBalance:number):string{
        return `${this.myName}'s new balance is ${this.balance + newBalance}`
    }

}

// console.log(poorUser.addbalance(30000));
// console.log(poorUser.balance);

const poorUser2:{
    myName: string;
    balance: number;
    addbalance: Function;
} = {
    myName: "khushi",
    balance: 2000,
    addbalance(newBalance:number):string{
        this.balance = this.balance + newBalance;
        return `${this.myName}'s new balance is ${this.balance}`
    }

}
// console.log(poorUser2.addbalance(10007));
// console.log(poorUser2.balance);

const arr : number[] = [1,3,4,5];
const arr2: number[] = arr.map((element: number): number=> element*element);
// console.log(arr2);






const array1: number[] = [20,23,44];

const array2:number[] = array1.map((e:number):number=> e*2);// map array return korbe tai number[] use korte hoyeche. 

console.log(array2);