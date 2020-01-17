var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greet(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
function createPoint(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return [x, y];
}
var users = new Student("Jane", "M.", "name");
console.log(users);
document.body.innerHTML = greet(users);
