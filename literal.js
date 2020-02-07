let p1 = {
    name: 'Frank', 
    sayHello: function() {
        alert(`Hi! I am ${this.name}.`); 
    }
};

let p2 = {
    name: 'Bob', 
    sayHello: function() {
        alert(`Hi! I am ${this.name}.`); 
    }
};

p1.sayHello();
p2.sayHello();


