//   If a Number is divisible by 3 print Fizz, if divisible by 5 print Buzz or if it is divisible by both print FizzBuzz

let a = [3, 5, 6, 10, 15, 9, 12, 25];   
for (let i = 0; i < a.length; i++) {
     if (a[i] % 5 === 0 && a[i] % 3 === 0) {
        document.write(a[i] + ' FizzBuzz' + "<br>");
        console.log(a[i] + ' FizzBuzz');
    }
   else if (a[i] % 3 == 0) {
        document.write(a[i] + ' Fizz' + "<br>");
        console.log(a[i] + ' Fizz');
      
    }
    else if (a[i] % 5 == 0) {
        document.write(a[i] + ' Buzz' + "<br>");
        console.log(a[i] + 'Buzz');
            }
    }
// ........................XXXXXXXXXX.........................



//  REVERSE A STRING

let s = "misbah";
let arr = [];
for(let i = 0; i < s.length ; i++){
    arr.push(s[i]);   
}
console.log(arr);
let save = [];
for (let i = arr.length-1; i >=0; i--) {
    save.push(arr.pop(arr[i]));
}
console.log(save);

// // // Method # 2

let s2 = "Misbah";
s2 = s2.split("");
console.log(s2);
let  t = [];
for (let index = s2.length-1; index >=0 ; index--) {
   t.push(s2[index]);
}
console.log(t);
console.log(t.join(''));

// ........................XXXXXXXXXX.........................







//// PALANDROM

let str = prompt('lets check for Palanfrom. Enter string');
console.log(str);
let sp = str.split('');
// console.log(sp);
sp = sp.reverse();
// console.log(sp);
let palindrom = sp.join('');
console.log(palindrom);
if(str === palindrom){
  console.log("Palandrom");
}
else if(str !== palindrom){
  console.log("Not palandrom");
}

// // SECOND METHOD.............

let array = [];
for(let i = sp.length-1 ; i >=0; i--){
  array.push(sp[i]);
}
let palindrom2 = array.join('');
console.log(palindrom2);
if(str === palindrom2){
  console.log("Palindrom");
}
else if(str !== palindrom2){
  console.log("Not palindrom");
}
// ........................XXXXXXXXXX................................





// COUNTDOWN BY USING setInterval()

// let count = 0;
let n = +prompt('Enter number');
let count = n;
setInterval(()=>{
  if(count !== 0){
    console.log(count );
    count--;    
  }
},1000);

// OR BY USING FUNCTION
function countdown(){
  if(count !==0){
    console.log(count);
    count--;   
  }
}
setInterval(countdown(),1000);

// COUNTDOWN BY USING setTimeOut()

let n2 = prompt('Enter number');
let count2 = n2;
function coutDown(){
  if(count2 !==0){
    setTimeout(function(){
      coutDown(count2--)},1000)
    console.log(count2);  
  }  
}
coutDown(count2);
// ........................XXXXXXXXXX................................



