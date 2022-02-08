const sum1 = suma(2, 10, 3);
const sum2 = suma(100, 99, 10)
const sum3 = suma(200, 980, 10);
const sum4 = suma(200, 'Hola', 10);

//Funcion => Es una pieza de código reutilizable que me permite reducir la repetición de código.

function suma(numA, numB, num3) {
  console.log(numA + numB - num3);
}

const estudiantes = ['Jonathan', 'Elisa', 'Agostina', 'Andres'];
const estudiantes2 = ['Flor', 'Joel', 'Braian', 'Javier', 'Alexis', 'Vanina', 'Gonzalo'];
const nuevoAlumno = 'Pepito';

function saludar(name) {
  console.log(`Hola, ${name}`);
}

function callSaludar(groupOfStudents) {
  for(let i = 0; i < groupOfStudents.length; i++) {
    saludar(groupOfStudents[i]);
  }
}

callSaludar(estudiantes);
callSaludar(estudiantes2);
saludar(nuevoAlumno);

//Diferencia entre función y método

//Métodos, no funciones.

//Métodos son funciones ligados a un objeto. 

/* const string1 = 'Hola mundo';
string1.toLowerCase();
string1.toUpperCase();
string1.charAt(2);

const person = {
  name: 'Luis',
  sayHello() {
    console.log('Hola soy Luis');
  }
} */