let num=[1,2,8,4,5,7,8,7,9]
  for(i=0;i<num.length;i++)
  {
      console.log(num[i])
  }
  // for each loop
  num.forEach((element)=>{// square the each element of array  
       console.log (element*2-1)  })
let v='9848985230h'
let u='santos ayer'
let arr=Array.from(v+u)///  convert the given string or number into array
console.log(arr)
// for of
for(let i of num)// shortcut way to access num
console.log(i)
 //for in
 for(let i in num)// provide keys : num[0] 0 is keys it will print all keys
 console.log(i)