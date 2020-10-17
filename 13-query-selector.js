// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'querySelector - DOM';
document.body.appendChild(h2);

// set html content
const section1 = document.createElement('section');
const section2 = document.createElement('section');

section1.setAttribute('id', 'section1');
section2.setAttribute('id', 'section2');

const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.classList.add('boxDiv');
div2.classList.add('boxDiv');

div1.textContent = 'Section 1 box 1';
div2.textContent = 'Section 2 box 1';

section1.appendChild(div1);
section2.appendChild(div2);

document.body.appendChild(section1);
document.body.appendChild(section2);

// query selector
const box = document.querySelector('.boxDiv');
console.log(box);

const sec2 = document.querySelector('#section2');
const boxSec2 = sec2.querySelector('.boxDiv');
console.log(boxSec2);

const boxAll = document.querySelectorAll('.boxDiv');
console.log(boxAll);
