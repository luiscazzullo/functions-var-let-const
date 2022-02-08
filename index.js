var primerVariable = 1;
let variables = 'Variable con let';
var variableVieja = 'Variable con var';
const miNuevaVariable = 'Constante';

//Var - Sólo a var se le aplica hoisting;
console.log('Var =>', a1);
//Por detrás, le asigna undefined;
var a1 = 'Hola mundo';

//Let
//Es susceptible a diferentes cambios en el código, puede cambiar su valor.
let let1;
let1 = 'Hola mundo'
let1 = 3;
let1 = 4;
console.log('Let =>', let1);

//Const - son más rápidas a nivel de navegador
//Debe ser declarada e inicializada en la misma línea
const pi = 3.1415;
const phoneNumber = 3814123415;
const city = 'San Miguel de Tucumán';
const personDNI = 38247822;

//console.log('Const =>', const1);
///////////////////////////////////////////////////////
//Segunda diferencia
//Var permite declarar e inicializar infinitas veces
var a2 = 'Primer valor';
var a2 = 'Segundo valor';
var a2 = 'Tercer valor';
console.log(a2);

//Let
//Permite cambiar el valor de una variable, es decir, reinicializarlo, pero no permite múltiples declaraciones.
let let2 = 'Primer valor';
let2 = 'Segundo valor';
let2 = 'Tercer valor';
console.log(let2);

//Const
//Sólo se puede declarar y asignar una única vez, en la misma sentencia;
const const2 = 'Unico valor';

//////////////////////////////////////////////////
//Tercera diferencia: Scope

//Var => Scope o alcance global. Cualquier parte de nuestro código tiene acceso a una variable declarada con var.
//Regla general => Huir del alcance global, limitar al máximo su uso.

var var3 = 'Hola';

if (2 == '2') {
  console.log('Var3 =>', var3);
  console.log(var4);
  var var4 = 'Mundo';
  console.log('Var 4 ==>', var4);
}

var var4 = 'Nuevo valor afuera';
console.log('Var 4 afuera ==>', var4);

//Let - Const
//Tienen un scope o alcance de bloque. Sus valores sólo son accesibles dentro del bloque en el que fueron declarados.
//Obtendremos un error si tratamos de acceder al valor de su variable fuera del bloque.
//Aclaración. Si se encuentra fuera de su bloque de código es susceptible al scope global.

let let3 = 'Valor let 3';

if (2 == '2') {
  console.log(let3);
  let let4 = 'Valor let 4';
  console.log(let4);
}

//console.log(let4);

//Miniprograma
const nombre = prompt('Ingrese su nombre');
console.log('Nombre del usuario ==>', nombre);

//Regla general => Usar const siempre que se pueda.
//Var está deprecado. No se usa. Prohibido usar.


let sum = 0;
for(let i = 0; i < 5; i++) {
  sum += i;
  console.log(sum);
}

