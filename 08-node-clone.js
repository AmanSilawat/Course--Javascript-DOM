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
const docFrig = document.createDocumentFragment();

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
// const orengesItem = document.createElement('li'); // not append in docFrig

// item2.setAttribute('id', 'pearsItem');

item1.textContent = 'Apple';
item2.textContent = 'Bananas';
item3.textContent = 'Pears';
// orengesItem.textContent = 'Oranges'; // not append in docFrig

docFrig.appendChild(item1);
docFrig.appendChild(item2);
docFrig.appendChild(item3);

// Append items to myList
myList.appendChild(docFrig);

// clone node
const listChildren = myList.children;
const BananasItem = listChildren[1];
const BananasCopy1 = BananasItem.cloneNode(); // default: doesn't include child node
const BananasCopy2 = BananasItem.cloneNode(true); // always include infinity child node

console.log(listChildren); // [li, li, li]
console.log(BananasCopy1); // <li></li>
console.log(BananasCopy2); // <li>Bananas</li>
