// go to terminal write these all
//node --version
//npm -- version
//npm install prompt-sync
//after installation 
// const variable  name=require('prompt-sync')
//const prompt=variable name();

const x=require('prompt-sync')
const prompt=x();

let a=prompt('what is your age: ')
a=parseInt(a)
if(a=>10 && a<20)
{
     console.log(" your age lies between 10 and 20 ")
}
else
console.log("you are adult enough")
let z=prompt("enter your first letter of your name :").toLowerCase();


switch(z)
{
      case'a':
      console.log("your name is aalok");
      break;
      case'b':
      console.log("your name is bimal");
      break
      case'm':
      console.log("your name is manoj");
      break
      case'd':
      console.log("your name is dines12");
      break
    

}
