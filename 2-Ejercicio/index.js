// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

//* 1.1

const divNuevo = document.createElement('div');
document.body.appendChild(divNuevo);

//*1.2

const divVersion2 = document.createElement('div');
const pVersion2 = document.createElement('p');
divVersion2.appendChild(pVersion2);
document.body.appendChild(divVersion2);

//*1.3

const divDinamico = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divDinamico.appendChild(p);
}
document.body.appendChild(divDinamico);

//*1.4

const pDinamico = document.createElement('p');
document.body.appendChild(pDinamico);
pDinamico.innerHTML = 'Soy un parrafo dinamico';

//*1.5

const h2 = document.querySelector('.fn-insert-here');
h2.innerHTML = 'hola';

//*1.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//*1.7

const eliminar = document.querySelectorAll('.fn-remove-me');

for (const elimin of eliminar) {
  elimin.remove();
}

//*1.8

const allDivs = document.querySelectorAll('div');
const pVersion3 = document.createElement('p');
pVersion3.textContent = 'Voy en medio';

document.body.insertBefore(pVersion3, allDivs[1]);

//*1.9

const instertDiv = document.querySelectorAll('div.fn-insert-here');

for (const div of instertDiv) {
  const pDentro = document.createElement('p');
  pDentro.textContent = 'Voy dentro!';
  div.appendChild(pDentro);
}
