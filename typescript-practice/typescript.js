var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function main() {
    console.log("Hello world");
    var value = "hello world";
    value = "Hello changed";
    value = 303030;
    var person;
    person = [{
            age: 30,
            name: 'rakesh',
            married: false
        }];
    console.log("Person object is -> " + JSON.stringify(person));
}
main();
function typeScriptMethod(a, b) {
    return a + b + "";
}
insertAtBeginning([93, 3, 3, 4, , 5, 5,], 19999);
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    console.log("New Array: " + JSON.stringify(newArray));
    // newArray[0].split(0)
    return newArray;
}
var max;
max = {
    age: 93,
    firstName: "John",
    greeet: function () {
        console.log("First Name");
    }
};
console.log("Max age -> ", max.age);
console.log("firstaname -> ", max.firstName);
console.log("Max age -> ", max.greeet());
