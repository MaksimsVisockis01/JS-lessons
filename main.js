//we have 3 types variables var, let, const
//let, const are much better(prefer to use them)

//use let if you want to change variable
// let age = 30;
// age = 29;
// console.log(age); // 29

//but if you want to secure data 
//and dont let smb change it use const!!
// const score = 15;
// score = 12;
// console.log(score); // error

//----------------------

//String, numbers, boolean, null, undefined

// const name = 'Max';
// const age = 30;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof );

//----------------------

// const name = 'Max';
// const age = 18;

//Concatenation
// console.log('My name is ' + name + 'and I am ' + age);

//Template String (better opt)
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

//----------------------

//const s = 'heLLo';
// console.log(s.length); // 5
// console.log(s.toUpperCase()) // HELLO
// console.log(s.toLowerCase()) // hello

//console.log(s.substring(0, 3)); //heL (takes letters from 0 to 3)

//console.log(s.substring(0, 3).toUpperCase()); //HEL (we can combine methods)

//console.log(s.split('')); //we split to an array(by every '' in our string) =(5) ['h', 'e', 'L', 'L', 'o']

//----------------------

const words = ''