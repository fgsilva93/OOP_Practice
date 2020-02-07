function Person(name, age) {
    this.name = name; 
    this.age = age;   
}

Person.prototype.greeting = function() {
    alert (`Greeting, I am ${this.name}.`)
}

Person.prototype.sleep = function() {
    alert('I am going to sleep now! My name is ' + this.name + '.')
}

function Teacher (name, age, dept) {
    Person.call(this, name, age) 
    this.dept = dept; 
}

Teacher.prototype = Object.create(Person.prototype); // cloing methods from parent
Teacher.prototype.constructor = Teacher; 

Teacher.prototype.greeting =function() {
    alert(`Hello, I am ${this.name}. I work in the ${this.dept} department.`)
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 

Student.prototype.greeting = function() {
    alert(`Hi I am ${this.name}. I'm majoring in ${this.major}.`)
}

let p1 = new Person('john', 29);
let t1 = new Teacher('Jasmine Jones', 26, 'Math');
let s1 = new Student('jack', 20, 'computer science'); 

console.log(p1);
console.log(t1);
console.log(s1);

p1.greeting();
t1.greeting();
s1.greeting();

p1.sleep();
t1.sleep();
s1.sleep();