
//Las funciones DECLARADAS o DECLARATIVAS reciben hoisting
//Con la palabra function => Se le conoce como manera declarativa
function helloWorld() {
  console.log('Hola mundo');
}

helloWorld();

//Funciones expresivas
const helloWorld2 = function() {
  console.log('Hello world 2');
}

helloWorld2();


//////////////////////////////////////////////////////////////

const miFuncion = function() {
  console.log('Hola desde mi función');

}

function sumar(a, b) {
  return a + b;
}

const tres = sumar(100, 200);

console.log(tres);

////////////////////////////////////////////////////////////////

//Arrow function - ES6

const arrowFunction = () => {
  console.log('Soy una arrow function');
};

//Si tengo un parámetro puedo obviar los paréntesis
const otraFunc = name => {
  console.log('Hola ' + name);
}

//Si tengo una sola línea, puedo quitar las llaves
const otraFunc2 = name => console.log('Hola ' + name);

//Si retornaré una sola línea, puedo obviar el return o usar el return implícito
const otraFunc3 = name => `Hola ${name}`;

const saludar = name => `Hola ${name}`;

const sumaArrow = (a, b) => a + b;

arrowFunction();
const saludo = saludar('Pepito');
console.log(saludo);

//Function scope

function soyOtraFunc() {

  var nombre = 'Luis';
  let nombre2 = 'Flor';
  const nombre3 = 'Agustina';

  const innerFunction = function() {
    console.log(nombre2);
    const a = 'Hola mundo';
    console.log(a);
    return a;
  }

  const newVariable = innerFunction()
  console.log(newVariable);

  console.log(nombre);
}

soyOtraFunc();

var fuera = 'fuera';

if(2 == '2') {
  var fuera2 = 'fuera2';
}

console.log(fuera2);

//console.log(nombre);
//console.log(nombre2);
//console.log(nombre3);