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
let b;
console.log(b);
// H.w  couter app by using setTimeOut or setTimeInterval
// premitive and non premetive datatypes in js  deep copy and shallow copy, clousers, cuury func, IFEE functions, arrow func, promises,
// Higher order func, find vs filter, map d/w forEach, push pop  