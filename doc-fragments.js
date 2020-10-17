// create and append ul
const myList = document.createElement('ul');
myList.setAttribute('id', 'myList');
document.body.appendChild(myList);

const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Apples';
item2.textContent = 'Bananas';

docFrag.appendChild(item1)
docFrag.appendChild(item2)


myList.appendChild(docFrag)
console.log(docFrag); //#dcoument-fragment (Empty)