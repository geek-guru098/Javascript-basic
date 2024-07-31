// const x=require("prompt-sync")
// const prompt=x();
// let name=prompt("enter your age ")
// console.log("my age is ",name) this is how we take input in node js in vs code
const prompt=require("prompt-sync")();
let a=prompt("enter your age: ");
a=parseInt(a);
if(a>20 && a<=50)
{
    console.log("eligible for driving license")
}
else if (a>50 && a<=100 ){
    console.log("not eligible for driving license")
}
else {
    console.log("you are in heaven and you cant")
}
// const var=require("prompt-sync")
//const prompt=var();
console.log(" you are ", a>10?"yes":"no")
