// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Node.cloneNode - DOM';
document.body.appendChild(h2);

// Add a ul tag
const myList = document.createElement('ul');
myList.setAttribute('id', 'myList');
document.body.appendChild(myList);

// make listItems
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.textContent = 'Apple';
item2.textContent = 'Bananas';
item3.textContent = 'Pears';

myList.appendChild(item1);
myList.appendChild(item2);
myList.appendChild(item3);

//..
const appleItem = document.querySelector('#myList > li:first-of-type');
const bananasItem = appleItem.nextElementSibling; //this select only next element
const pearsItem = bananasItem.nextSibling; // this select next node or next text (without any element)

console.log(appleItem); // <li>Apple</li>
console.log(bananasItem); // <li>Bananas</li>
console.log(pearsItem); // <li>Bananas</li>

// append ul multiple time
for (let i = 0; i <= 20; i++) {
    document.body.append(myList.cloneNode(true));
}

// add navigation
const nav = document.createElement('nav');
const emptyDiv = document.createElement('div');
nav.textContent = 'Navigation';

// Get first element of body
const firstEleOfBody = document.body.firstElementChild;

// insert element on top of body
document.body.insertBefore(nav, firstEleOfBody);
document.body.insertBefore(emptyDiv, firstEleOfBody);

// Set space top of nav
const belowNav = nav.nextElementSibling;
belowNav.style.marginTop = nav.clientHeight + 'px';
