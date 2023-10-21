let a = "misbah";
let b = 'Fasiha';

console.log(`${b} met 
${a}`);

// Simple Function 
function sum(a, b) {
    return a + b;
}
sum(a, b);

// FAT ARROW FUNCTION
const SUM = (a, b) => {

}


// Reference data
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// let arr2 = arr;
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr2);
arr.push(7);
console.log(arr, arr2);

// Deep copy by spread operator    make copy of array

let array = [1, 2, 3, 4, 5];
let array2 = [...array];
// let array2 = [1,2,3,4,5,6,7,8];
let array3 = [...array, ...array2];
console.log(array3);
array2.push(40);
// console.log(array2);
// Map  return a new array
// Map always returns array

let obj = [
    {
        name: "misbah",
        roll: 31
    },
    {
        name: "fasiha",
        roll: 12
    },

]

// let names = obj.map((obj) => {
//     return obj.roll;
// })
// console.log(names);

let std = [{
    name: "misbah",
    roll: 31
},
 {
    name: "fasiha",
    roll: 12
},]

let abc = std.map(std => {
    return { Namenroll: `${std.name} ${std.roll}`}

})
console.log(abc);

// Asyn Await
//  async await wait for the required response  ..wait untill it completely fetch the data 
// async makes a function return a Promise
// await makes a function wait for a Promise


// Promises
// resolve, reject, pending











// hw interface  = incomplete methods are used
// and abstraction = complete methods are used
// Method overloading different parameters
// repository purpose