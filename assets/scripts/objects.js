const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first-name': 'Mister',
  age: 55,
  hobbies: ['Running', 'Sitting'],
  [userChosenKeyName]: '...',
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
};

// person.age = 56;
delete person.age; // removes the property
// person.age = undefined; // as if the value was never set (bad practice)
// person.age = null;  // property remains with a value of null
person.isAdmin = true;

const keyName = 'first-name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);