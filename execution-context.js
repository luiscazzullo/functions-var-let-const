/* const name = 'Luis'; 

const first = () => {
  //Nuevo contexto de ejecución
  let a = 1;
  //Nuevo contexto
  const b = second();
  a = a + b;
  return a;
}

function second() {
  var c = 2;
  return c;
}

first(); */

//name viviría en nuestro contexto de ejecución global.

//

//first()
  //second()
//Entorno global

//Los distintos contextos de ejecución generan lo que se conoce como el Scope Chain
/* let a = 1;
const b = 2;
var c = 3;
let d = 7;

const third = () => {
  const a = 5;
  var c = 6;
  console.log(d + c); //13
  console.log(b); //2
  console.log(a); // 5
} */

//Ejercicio
/* const myName = 'Gabriel';
function fourth() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
    console.log(myName);
  }
  function second() {
    const job = 'teacher';
    console.log(`${myName} is ${age}-old ${job}`)
  }
  second();
}

fourth(); */
//Temporal Dead Zone => function y var

console.log(first());
//var c = 'Luis';
const a = 'Luis';
first();
function first() {
  const b = 'Hola';
  second();
  function second() {
    const c = 'hi';
    function third() {
      const d = 'hey';
      console.log(d + c + b);
    }
    third();
  }
}

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstname);
  function printAge() {
    const output = `Tienes ${age}, naciste en el año ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
};

calcAge(1994);
const firstname = 'Luis'; */