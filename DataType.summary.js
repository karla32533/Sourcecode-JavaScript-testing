// primitive & Reference type

// To remmber data type formula [N,N,S,S,B,B,U]

let DATA_TYPE = {
    N : "Number ",
    N : "Null",
    S : "Symbol",
    S : "String",
    B : "Boolean",
    B : "BigInt",
    U : "Undefiend",
}

console.table(DATA_TYPE)


// 7 types : string , Number , Boolean, null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123")

console.log(id === anotherId);


const bigNumber = 424354324323443n

// Reference (Non primitive )

// Array, Objects, Functions 

const heros = ["shakiman","naagraj","doga"]

let my=Obj = {
    name:"histesh",
    age:22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);

