class Person {
    constructor(name, age) {
        this.n = name;
        this.a = age;
    }

    sayHello() {
        alert(`Hello, my name is ${this.n}! I am ${this.a} years old`)
    }

    sleep() {
        alert(`I am going to sleep now! My name is ${this.n}`)
    }
}

let p1 = new Person('Jame', 29)
let p2 = new Person('Jane', 28)

p1.sayHello();
p2.sayHello();

p1.sleep();
p2.sleep();