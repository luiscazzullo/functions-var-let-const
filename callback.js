const multiplyByTwo = num => num * 2;
const addTwo = num => num + 2;
const substractTwo = num => num - 2;
const divideByTwo = num => num / 2;

//console.log(addTwo(11));

const addS = word => `${word}s`;


//Principio de Programación
//Principio de una sola responsabilidad
function map(array, cb) {
  const newArray = [];
  //MAp original => Su propio for.
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
}

const printValue = (value) => console.log(value);


//Recorrer la array
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

forEach([4, 5, 6], printValue);

function mapWithForEach(array, callback) {
  const newArray = [];
  forEach(array, (item) => {
    newArray.push(callback(item));
  });
  return newArray;
}

console.log(mapWithForEach([7, 8, 9], multiplyByTwo));

const numbers = [1, 2, 3];
console.log(map(numbers, multiplyByTwo));
console.log(map(numbers, addTwo));
console.log(map(numbers, substractTwo));
console.log(map(numbers, divideByTwo))

/* function map(array, operation) {
  const newArr = [];
  switch(operation) {
    case 'sum':
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] + 2);
      }
      break;
    case 'multiplication':
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2);
      }
      break;
    case 'division':
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] / 2);
      }
      break;
    case 'substract':
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2);
      }
      break;
    case 'elevation':
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * array[i]);
      }
      break;
    default:
      console.log('Error: operación no soportada')
  }
  return newArr;
}; */
