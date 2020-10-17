// Add a h2 tag
const input = document.createElement('input');
input.setAttribute('id', 'myInput');
input.setAttribute('value', 'sample');
document.body.appendChild(input);

document.getElementById('myInput').setAttribute('value', 'Enter Name');

const myElement = document.createElement('div');

myElement.setAttribute('class', 'dcode');

document.body.appendChild(myElement);