// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Dataset - DOM';
document.body.appendChild(h2);

//Data set attribute added in div
const myDiv = document.createElement('div');
myDiv.setAttribute('id', 'myDiv');
myDiv.setAttribute('data-name', 'Sahil');
myDiv.setAttribute('data-started-coding-at', '15');
myDiv.textContent = 'Sample Text';
document.body.appendChild(myDiv);

console.log(myDiv.dataset); // name: "domenic", startedCodingAt: "15"

// Change dataset value
myDiv.dataset.name = 'Imran';
myDiv.dataset.startedCodingAt = 8;

console.log(myDiv.dataset); // name: "Bob", startedCodingAt: "8"

// Empty dataset value
myDiv.dataset.name = '';
console.log(myDiv.dataset); // name: "", startedCodingAt: "8"

// delete dataset Attribute
myDiv.removeAttribute('data-name')
console.log(myDiv.dataset); // startedCodingAt: "8"