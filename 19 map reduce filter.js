 const arr=[12,34,56]
 let x=arr.map((i,index,array)=>{
      console.log(i,index,array)// simply print the element of array/      //also helps to create a new array// we can also print  index and array  with the keywords index and array
   
     return index+i; })
      console.log(x)// print a new array 

let arr2 = [12, 4, 8, 4, 87, 5, 6];

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 10) {
//         console.log("[", arr2[i] ,"]");
      
//     }
// }

let m=arr2.filter((value)=>{// return only those element which are less than 10
    return value<10
})
console.log(m) 
// array reduce method
let v= [4,7,89,5,6,8,7]
let k=v.reduce((x1,x2)=>{   //x1 and x2 will take first two element  and add and new element and 
    // third element will be added and it will add  all the element of the array and give result
     return x1+x2
})
console.log(k)