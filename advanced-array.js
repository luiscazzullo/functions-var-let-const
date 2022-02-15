//Map => Sigue el principio de inmutabilidad. 
const numbers = [10, 20, 30, 40];
const multiplyByIndex = (value, index) => value * index;
const numbersByTwo = numbers.map(multiplyByIndex);
console.log(numbers);
console.log(numbersByTwo);

//forEach
const numbers2 = [20, 30, 40, 50];
const numbers3 = []
numbers2.forEach((value, index) => {
  numbers3.push(multiplyByIndex(value, index))
});
console.log(numbers3);

// Filter
const persons = [
  { name: 'Juancito', age: 18 },
  { name: 'Pedrito', age: 25 },
  { name: 'Pepito', age: 15 },
  { name: 'Marianita', age: 32 },
  { name: 'Florcita', age: 17 },
];

const searchPersons = persons.filter(person => person.name.includes('Juancito')); // [];
console.log(searchPersons);

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNumbers = numbers4.filter((number) => number % 2 === 1);
console.log(oddNumbers);

const hasLegalAge = persons.filter((person) => person.age >= 18);
console.log(hasLegalAge);

//FIND => Encontra un solo elemento en la array
const mariana = persons.find((person) => person.name.includes('Marianita')); // null
console.log(mariana);


//const cards = [{ id, title, date, description, createdBy }];

//Reduce =>
function sumArray(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}

const numbers7 = [1, 2, 3, 4];
const initialValue = 0;
const total = numbers7.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, initialValue);

const students = [
  { name: 'Elisa', age: 20 },
  { name: 'Javier', age: 21 },
  { name: 'Andres', age: 20 }
]

const person1 = { name: 'Pepito', age: 25 };

console.log(person1['age']);


function groupBy(arr, property) {
  return arr.reduce((prev, curr) => {
    let key = curr[property];
    if(!prev[key]) {
      prev[key] = [];
    }
    prev[key].push(curr);
    return curr;
  }, {})
};

const flatArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function flatten(arr) {
  return arr.reduce((acum, curr) => {
    return acum.concat(curr);
  }, []);
}

console.log(flatten(flatArr));

console.log('GROUP ===>', groupBy(students, 'age'));

console.log('TOTAL ===>', total);

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`
    Previous: ${previous},
    current: ${current},
    index: ${index},
    returns: ${returns}
  `);
  return returns;
}

const numbers10 = [1, 2, 3, 4, 5];
numbers10.reduce(reducer, 0);

//Every => Retornar un valor booleano si todos los elementos de una array cumplen una determinada condición

const oddNumbers2 = [1, 3, 5, 7, 8];
console.log(oddNumbers2.every(number => number % 2 === 1));

//Some => Retorna un valor booleano si uno de los elementos cumple la condición que le indica el callback
console.log(oddNumbers2.some(value => value % 2 === 0));

const permissions = ['admin', 'moderator', 'user'];
const isAdmin = permissions.some(value => value === 'admin');
//Flat
const multiArr = [1, 2, [4, 5, 6], [7, 8, [[11]]], [[9, 10]]];
console.log(multiArr.flat());

//FlatMap
console.log(multiArr.flatMap(value => Array.isArray(value) ? [] : value));

//Sort
const numbers20 = [4, 2, 1, 5, 10, 3];
numbers20.sort((a, b) => {
  return b - a;
});

console.log(numbers20);

const persons20 = ['Juan', 'Pedro', 'Oscar', 'Luis', 'Flor', 'Agustin', 'Mariano'];
persons20.sort((a, b) => {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();
  if (nameA > nameB) {
    return -1;
  }
  if(nameA < b) {
    return 1;
  }
  return 0;
})

console.log(persons20);
