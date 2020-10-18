// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Event Delegation - DOM';
document.body.appendChild(h2);

// append p tag
const myP = document.createElement('p');
myP.setAttribute('id', 'myP');
myP.textContent = 'This is a small paragraph.';
document.body.appendChild(myP);

// append p tag
const myP2 = document.createElement('p');
myP2.setAttribute('id', 'myP2');
myP2.textContent = 'This is a small paragraph.';
document.body.appendChild(myP2);

// create input tag
const input = document.createElement('input');
input.value = 'Enter your name';

// crate buttton tag
const button = document.createElement('button');
button.textContent = 'Press the button';

// append node with replace
myP.replaceWith(input, button, 'And simple text');
myP2.childNodes[0].replaceWith('Added text throw childNodes');
