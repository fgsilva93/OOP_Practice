class Person {
    constructor(name, age) {
        this.name =name;
        this.age = age; 
    }

    greeting() {
        alert(`Greetings, I am ${this.name}.`)
    }

    sleep() {
        alert(`I am going to sleep now! My name is ${this.name}.`)
    }
}

class Teacher extends Person {
    constructor(name, age, dept) {
        super(name, age); //standin of the person
        this.dept = dept; 
    }

    greet() {
        alert(`Hello, I am ${this.name}. I work in the ${this.dept} department.`);
    }
}