// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

//!1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

for (const countrie of countries) {
  const li = document.createElement('li');
  li.textContent = countrie;
  ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

//!2

const eliminar = document.querySelector('.fn-remove-me');
eliminar.remove();

//!3

const ul = document.createElement('ul');
const printHereDiv = document.querySelector('[data-function="printHere"]');

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  ul.appendChild(li);
}

printHereDiv.appendChild(ul);

//!4

const citys = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

for (const city of citys) {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  const img = document.createElement('img');

  title.textContent = city.title;
  img.src = city.imgUrl;
  div.appendChild(title);
  div.appendChild(img);

  document.body.appendChild(div);
}

//!5

const buttonDeleteLast = document.createElement('button');
buttonDeleteLast.textContent = 'Eliminar último div';

function eliminarLastDiv() {
  const lastDiv = document.querySelectorAll('div');
  lastDiv[lastDiv.length - 1].remove();
}
buttonDeleteLast.addEventListener('click', eliminarLastDiv);
document.body.appendChild(buttonDeleteLast);

//!6

const allDivsToRemove2 = document.querySelectorAll('div');

for (const div of allDivsToRemove2) {
  const button = document.createElement('button');
  button.textContent = 'Elimíname!';
  button.addEventListener('click', (e) => e.target.parentElement.remove());
  div.appendChild(button);
}
