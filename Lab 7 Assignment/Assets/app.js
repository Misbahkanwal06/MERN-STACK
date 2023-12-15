function printFullName(){
  let fn =  prompt('Enter Your First Name');
   let ln = prompt(`Enter Your last Name`);
 document.write(`${fn} ${ln}`);
}
function calculateSum(){
    let n1 = +prompt('Enter Number1');
    let n2 = +prompt('Enter Number2');
    let sum = n1 + n2;
    document.write(`Sum of ${n1} & ${n2} is = ${sum}`  );

}