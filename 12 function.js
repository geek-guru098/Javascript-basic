const x=require('prompt-sync')
const prompt=x();
let a=prompt("eneter the value of a")
let b=prompt("eneter the value of b")
a=Number.parseInt(a)
b=Number.parseInt(b)
function add(x,y)
{
     return x+y;
}
console.log(add(a,b));
