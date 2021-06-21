'use strict';

const person = {
    name: '',
    age: '',
};

person.name = prompt('Как вас зовут?');
person.age = prompt('Сколько вам лет>');

alert(`Привет, ${person.name}`);

