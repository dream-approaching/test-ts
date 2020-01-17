class Student {
  fullName;
  constructor(public firstName: string, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

function createPoint(x: number = 0, y: number = 0) {
  return [x, y];
}

const users = new Student("Jane", "M.", "name");
console.log(users);

document.body.innerHTML = greet(users);
