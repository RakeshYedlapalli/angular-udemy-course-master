function main() {
    console.log("Hello world");


    let value: string | number = "hello world";

    value = "Hello changed";
    value = 303030;


    type Person = {
        name: string;
        age: number;
        married: boolean;
    }[];

    let person: Person;

    person = [{
        age: 30,
        name: 'rakesh',
        married: false
    }];

    console.log("Person object is -> " + JSON.stringify(person));
}

main();


function typeScriptMethod(a: number, b: number) : number | string {   
    return a+b+"";

}

insertAtBeginning([93,3,3,4,,5,5,], 19999);
function insertAtBeginning(array: any[], value: any) {

    const newArray = [value, ...array];
    console.log("New Array: " + JSON.stringify(newArray));
    // newArray[0].split(0)
    return newArray;
}

interface Human {
    age: number,
    firstName: string,

    greeet: () =>  void;
}


let max: Human;

max = {
    age:93,
    firstName: "John",
    greeet: () => {
        console.log("First Name")
    }
}

console.log("Max age -> ", max.age);
console.log("firstaname -> ", max.firstName);
console.log("Max age -> ", max.greeet());

