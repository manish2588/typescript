
const arr:number[]=[1,2,3];
const arr1:number[]=[1,2,3];
console.log(arr)

console.log(arr)
const arr2:number[]=[1,2,3,44,5,6,7,88,9,15]

const newAry:number=arr2.reduce((acc,value)=>Math.max(acc,value),0)
console.log(newAry)