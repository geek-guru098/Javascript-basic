let num1=[0,1,2,3,4,5,6,7,8,9]
delete num1[9]// delete the last element of array but doesnt affect the length of array
console.log(num1)
console.log(num1.length)
let num2=[10,11,12,13,14,15,16,17,18,19]//alt+left button for multiple cursor
let x1=num2.concat(num1)
console.log(x1)
//sort method
let v=[1,2,5,3,6,9,7,4,10]
v.sort()// sort alphabetically
console.log(v)
let s= ["arry","aram","csita"] // sort alphabatically
s.sort();
console.log(s)
let compare=(a,b)=> 
{
    return b-a;
}
v.sort(compare)// sort the elements in descending order if return os b-a
console.log(v)
v.reverse();// reverse the array
console.log(v)
let num=[1,465,5,8,56,2,3,5,54,5]
let x= num.splice(2,3,23,45,67)// 2 is staring position form where to remove and 3 is number of element to be added 
// Nd others are new element to be added
console.log(num)//console.log(x) will give deleted values
let p=num.slice(2,5)// it will show  element of array from 2 to 4// last index will be not included
console.log(p)
console.log(num)