//API => Application Programming Interface
//Frontend API => Funcionalidades externas que se pueden acoplar a Javascript.

//DOM => Document Object Model
//Critical Rendering Path

//Creando DOM => Etiquetas HTML en forma de árbol
/* const div = document.getElementById('div'); */
//Text content => Modifica el texto interno
/* div.textContent = 'Hola mundo'; */
//Style => Añade estilos en línea
/* div.style.background = 'violet';  */
//Añadir clase CSS => DOMTokenList
/* div.classList.add('my-class'); */
//Quitar una clase CSS
/* div.classList.remove('my-class');
div.className = 'my-class div'; */
//div.classList
//console.log(typeof div.className);

//Nos devuelve o retorna una HTMLCollection
const divsList = document.getElementsByClassName('div');
//Destructuring
const divs = [...divsList];

divs.forEach((value) => value.classList.add('my-class2'));

//Selector tag
const divTags = document.getElementsByTagName('div');
console.log(divTags);

//Selecciona un elemento
const firstDiv = document.querySelector('#div');
console.log(firstDiv);
const secondDiv = document.querySelector('.div');
console.log(secondDiv);

//Seleccionar muchos elementos => Devuelven un NodeList
const allDivs = document.querySelectorAll('div');
allDivs.forEach(value => console.log(value));
console.log(allDivs);

//Crear y añadir elementos o nodos al DOM
//Creación
/* const paragraph = document.createElement('p');
paragraph.textContent = 'Soy un parrafo JS';
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Parrafo2';
const paragraphs = [paragraph, paragraph2];
//Añadir un elemento al DOM
document.body.append(...paragraphs); */

//Ejercicio
const news = [
  { title: 'Noticia 1', date: '1min', author: 'Pepito' },
  { title: 'Noticia 2', date: '30min', author: 'Juancito' },
  { title: 'Noticia 3', date: '1h', author: 'Pedrito' },
];

const items = [];
news.forEach((item) => {
  const title = document.createElement('h3');
  title.textContent = item.title;
  const author = document.createElement('p');
  author.textContent = item.author;
  const date = document.createElement('span');
  date.textContent = item.date;
  const container = document.createElement('div');
  container.append(title, author, date);
  items.push(container);
});

const section = document.querySelector('.news');
section.append(...items);

//Añadir elementos antes de otro elemento
//Seleccionar la referencia Referencia
const ref = document.querySelector('#subtitle');
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Titulo principal';
//Selecciono el contenedor
const titleContainer = document.querySelector('.example');
//Ingreso el elemento nuevo y luego la referencia
titleContainer.insertBefore(mainTitle, ref);

//PREPEND => Añadir elementos al comienzo
titleContainer.prepend(document.createElement('hr'));

//INSERT ADJACENT
const h2Ref = document.querySelector('#example-title');
const newNode = document.createElement('span');
newNode.textContent = 'Soy un span';

h2Ref.insertAdjacentElement('afterend', newNode);

//EJEMPLO 2:
const news2 = [
  { title: 'Noticia 1', date: '1min', author: 'Pepito' },
  { title: 'Noticia 2', date: '30min', author: 'Juancito' },
  { title: 'Noticia 3', date: '1h', author: 'Pedrito' },
];

const items2 = [];
news2.forEach((item) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.author}</p>
    <span>${item.date}</span>
  `;
  items2.push(container);
})

const newExample = document.querySelector('.new-example');

newExample.append(...items2);

//Remover elementos del DOM
const nodoAEliminar = document.querySelector('#example-title-2');
const padreDirecto = document.querySelector('.new-example-2');

padreDirecto.removeChild(nodoAEliminar);
padreDirecto.remove();

//Reemplazar elementos
const padre = document.querySelector('#header');
const elementToReplace = document.querySelector('#header h1');
const newTitleNode = document.createElement('h1');
newTitleNode.textContent = 'Bienvenido Usuario';
padre.replaceChild(newTitleNode, elementToReplace);

//Mas propiedades
const parrafoFooter = document.querySelector('footer p');
parrafoFooter.parentElement.style.background = 'blue';
parrafoFooter.parentElement.style.color = 'white';
//Traversing => Importante para los eventos en el DOM
console.log(parrafoFooter.parentElement.parentElement);

//FORMS => DOM
const inputName = document.querySelector('#inputName');
const name = inputName.value;

