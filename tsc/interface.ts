interface Person{
    name:string;
    age:number;
    level:string;
}

const person1:Person={
    name:"Ram",
    age:1,
    level:"Beginner"
}

console.log(person1)

// tuples

type Category=[string,number]

const mobile:Category=["Iphone",45000]

console.log(mobile)