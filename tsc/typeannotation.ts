let str:string="I am string variable";
let strLength:number=str.length;
console.log(strLength);
console.log('hello')

// divisible by 4 and 8

function divisibleCheck (num:number):boolean{
    return num % 4===0 || num % 8===0;
  }
 console.log( divisibleCheck(6));