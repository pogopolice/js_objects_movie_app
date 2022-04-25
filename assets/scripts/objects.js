let person = {
  name: 'Mister',
  age: 55,
  hobbies: ['Running', 'Sitting'],
  greet: function() {
    alert('Hi there!');
  }
};

// person.age = 56;
delete person.age; // removes the property
// person.age = undefined; // as if the value was never set (bad practice)
// person.age = null;  // property remains with a value of null
person.isAdmin = true;

console.log(person.age);