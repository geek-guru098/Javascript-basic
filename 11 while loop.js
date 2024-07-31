const x=require('prompt-sync')
const prompt=x();
let a=prompt("enter the value of a ")
let i=0;
while(i<a)
{
  console.log("hello world")
  console.log(i)
     i++;
}
do{ 

    console.log(i)
    i++
}
while(i<a)