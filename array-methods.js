const names = ['Luis', 'Flor', 'Jorge'];
names.push('Andres');
console.log(names.length);

//Push => Añadir elementos al final de la array
//Unshift => Añadir elementos al comienzo de la array

/* const cars = [];

for(let i = 0; i < 5; i++) {
  const car = prompt('Ingrese un auto');
  cars.push(car);
}

console.log(cars); */

const students = ['Marco', 'Luciano'];
students.unshift('Vanina');

console.log(students);

//Pop => Quita el último elemento de la array
const fruitsSinStock = [];
const fruits = ['Manzana', 'Banana', 'Pera'];
//console.log(fruits.pop())
const fruitSinStock = fruits.pop();
fruitsSinStock.push(fruitSinStock);
console.log(fruits);

//Shift => Quitar el primer elemento de la array y lo retorna
const players = ['Messi', 'Cr7', 'De paul'];
console.log(players.shift());
console.log(players);

//IndexOf => Devuelve la posición (number) del elemento en la array. Si no existe el elemento me devuelve -1. 
const books = ['La naranja mecanica', 'Cien años de soledad', '221163', 'Games of thrones', 'Games of thrones', 'Games of thrones'];
const gotPosition = books.indexOf('Games of thrones');
if(gotPosition >= 0) {
  console.log(books[gotPosition]);
} else {
  console.log('El libro solicitado no existe');
}
console.log(gotPosition);
console.log(books);

//LastIndexOf => Devuelve la posición del último elemento encontrado. Si no existe, devuelve -1.
const lastGot = books.lastIndexOf('Games of thrones');
console.log(lastGot);

//Slice => Corta los elementos dada dos posiciones y crea una nueva array
const teams = ['deca', 'santo', 'bokita', 'river'];
const teams2 = teams.slice(1,3);
console.log(teams);

//Splice => Le decimos la posición inicial en el primer parámetro y luego le indicamos la cantidad de elementos que cortar a partir de la primera posición. Modifica la array original
const nba = ['spurs', 'bulls', 'heat', 'knicks'];
const nba2 = nba.splice(1, 3);
console.log(nba2);

//Como quitar elementos del medio de una array
/* const vegetables = ['Tomate', 'Lechuga', 'Zanahoria', 'Brocoli'];
const vegetable = prompt('Elige un vegetal para quitar');
//Encontrar el index
const index = vegetables.indexOf(vegetable);
//Hacemos el corte
const newVegetables = vegetables.splice(index, 1);
console.log('vegetales ===>', vegetables); */

//Reverse => Método que básicamente da vuelta una array.
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers);

//Join => Transformar una array a una string. Debo indicar el caracter para incluirle en medio de los elementos
const textArr = ['Hola', 'estoy', 'dictando', 'una', 'clase'];
const text = textArr.join(' ');
console.log(text);

//Split => Transformar una string a una array
const text2 = 'Holamundo';
const text2ToArr = text2.split('');
console.log(text2ToArr);

//Crear una función que tome una palabra y la de vuelta
//hola => aloh
function reverseString(string) {
  return string.split('').reverse().join('');
}

//const darVuelta = prompt('Ingresar palabra');
//console.log(reverseString(darVuelta));

//Includes => Este metodo devuelve un valor booleano, dependiendo si el elemento que buscamos existe o no.

const commonUser = ['user'];
const moderator = ['user', 'moderator']
const superUser = ['user', 'admin', 'moderator'];

const isAdmin = (user) => {
  return user.includes('admin');
}

console.log(isAdmin(superUser));
console.log(isAdmin(moderator));
console.log(isAdmin(commonUser));

//For Each. Recorre la array y nosotros podemos modificar o realizar cualquier operación con los valores de la array.

const numbers2 = [1, 2, 3, 4];
const multiplyBy2 = [];
numbers2.forEach(function(value) {
  multiplyBy2.push(value * 2);
});

console.log(multiplyBy2);

//Concat => Fusiona dos arrays
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const mergeArr = arrOne.concat([8, 9, 10, 11, 12]);
console.log(mergeArr);
