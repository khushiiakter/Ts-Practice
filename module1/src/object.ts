//reference type --> object
// ts compiler onk smart dekhe , se kono type declare nh korleo ta infer kore nite pare , mane implicit - mmane nije nije vebe nite pare , konta ki type.. expicit mane holo amder nijder likhe dite hobe konta kon type .

const user : {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;

}  ={
    firstName: "kHushi",// aikhane basic object likhte hobe. akhon jokhon ai objecct er type declare korte jabo. 
    middleName: "akter",//seta jekhane type likhbo , sekhane define korte hobe 
    lastName: "hena",
    age: 22,
}

// kokhono amn hote pare ami obj er type toh ase property soho. but value teh property ta nai , tokhon amader optional type use korte hobe. opitonal ? ai mark type likhar oikhane dete hobe. 
const user2 : {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    age: number;

}  ={
    firstName: "kHushi",
    lastName: "hena",
    age: 22,
}

//type literal - jokhon akta value , type hisebe achoron ba define kora hobe , tokhon setak bole, type literal.  
//jokhon amra chai , object ar akta value ar man kokhono change hobe nh , tokhn amra sei value take , jekhane sokol type likhe , type ar jaigai likhe rakhi..

const user3 : {
    company: "Astha IT";
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    age: number;

}  ={
    company: "Astha IT", // akhon ata simply vlaue . but ami chai, keo amr company ar name cchange korte parbe nh. tokhn ami type literal use korbo.. mane ,oi type likhar oikhane string nh likhe, ai company name ke type banay oikhane likhe dibo.. 
    firstName: "kHushi",
    lastName: "hena",
    age: 22,
}

// amra chaile object er sokol property pete pari. 
console.log(user3.company);
