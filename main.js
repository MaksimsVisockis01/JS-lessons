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

// const words = 'Words, are, splited';
// console.log(words.split(', ')); // splited every ", "
//Array(3) 0: "Words" 1: "are" 2: "splited"

//----------------------

//Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);//(5) [1, 2, 3, 4, 5]


//Better option
// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits); //(3) ['apples', 'oranges', 'pears'];

// const anytypes = ['apples', 'oranges', 'pears', 10, true, false, null];
// console.log(anytypes); // we can contain any data in arrays

// const anytypes = ['apples', 'oranges', 'pears', 10, true, false, null];
// console.log(anytypes[1]); //oranges (array: 0, 1, 2, 3 ....)


//we can change and add dates in array, but cant change array 

// const array = ['apples', 'oranges', 'pears', 10, true, false, null];
// array[3] = 'bubble';
//  console.log(array[3]);// bubble

// const array = ['apples', 'oranges', 'pears', 10, true, false, null];
// array = [];
// console.log(array);// error


//we can use methods for arrays:

const array = ['apples', 'oranges', 'pears', 10, true, false, null];

array.push('end')//push values into the end
array.unshift('start')//push values into the begining
array.pop();//take away last value from array
console.log(array);