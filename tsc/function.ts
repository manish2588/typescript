function first(name:string){
    console.log(`Hello ${name}`)
}
first("Manish");

const fun=(user:string):string=>{
    return `Hello second ${user}`
}
 console.log(fun("User"))

 function isPalindrome(str:string):boolean{
   return str.toLowerCase()===str.split("").reverse().join("").toLocaleLowerCase()
 }

 console.log(isPalindrome("NAn"))