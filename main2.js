// const x = 10;

// if(x == 10) {//if we have 2= than program won't check if variable is string or smth else
//     console.log('x is 10');
// }

// if(x === 10) {//if we have 3= than program will check if variable is string or smth else
//     console.log('x is 10'); 
// }

// if(x === 10) {
//     console.log('x is 10'); 
// }else if(x > 10){
//     console.log('x > 10'); 
// }else{
//     console.log('x < 10'); 
// }

// if(x/2 ===5){
//     console.log('yep');
// }


//-------------------

// const color = x > 10 ? 'red' : 'blue';
// //console.log(color); //blue cause x is less than 10

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// const arr = [];
// if(arr.length){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.length - 1 === i){
//             console.log(arr[i]);
//         }
//     }
// }else{
//     console.log(-1);
// }

// Array.prototype.last = function() {
//     if(arr.length){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.length - 1 === i){
//             return arr[i];
//             }
//         }
//     }else{
//     return -1;
//     }
// };
// const arr = [1, 2, 3];
// arr.last();



// var twoSum = function(nums, target) {
//     for(let x = 0; x < nums.length; x++){
//         for(let y = 1; y < nums.length; y++){
//             if(nums[x] + nums[y] == target && x != y ){
//                 const answ = [x, y];
//                 return answ;
//             }
//         }
//     }
// };
// const nums = [2,5,5,11];
// const target = 10;
// console.log(twoSum(nums, target));


//----------------------
//classes


class Person{
    constructor(firstName, lastName, dob){
        this.fistName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getFullName(){
        return `${this.fistName} ${this.lastName}`;
    }
}

const person1 = new Person('Max', 'V', '28-05-2004');
console.log(person1.getFullName());