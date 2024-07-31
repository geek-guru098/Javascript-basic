

// // problem no 1( add an element a array) and problem 2 add until zero is entered

// let num=[1,3,4,5,6,9];
// const prompt=require('prompt-sync')();
// let x; 
//  do {
//     x=prompt("enter the number to be added to array : ")

// x=Number.parseInt(x);
// num.push(x);}
// while(x!=0) 

// console.log(num);
// let r=num.filter((x)=>{
    
//     return x>=5
// })
// console.log(r)
// let z=num.map((x)=>{
    
//     return x*x
// })
// console.log(z)
// calculate the factorial of number from an array of first natural number 
let arr=[1,2,3,4,5]
let c=arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(c)