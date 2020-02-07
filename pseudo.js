//constructor 
function Person(name, age) {
    this.name = name; 
    this.age = age; 
}
//method
Person.prototype.sayHello = function() {
    alert ('Hello my name is ' + this.name + '! I am ' + this.age + ' years old')
}

Person.prototype.sleep = function() {
    alert('I am going to sleep now! My name is ' + this.name + '.')
}

let p1 = new Person('Jame', 29)
let p2 = new Person('Jane', 28)

p1.sayHello();
p2.sayHello();

p1.sleep();
p2.sleep();