let a; 
let again=true;
 const prompt=require('prompt-sync')();
 a=prompt("enter the age of person : ")
 a=parseInt(a);
const candrive=(a)=> { 
    return a>18?true:false
}
if(candrive(a))
{ 
 console.log("you can drive")
}else
{ 
    console.log("you cant drive ")
} 
again=confirm('do you wann to run again')