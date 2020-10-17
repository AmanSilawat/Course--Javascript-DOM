// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Node.insertBefore - DOM';
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
const orengesItem = document.createElement('li'); // not append in docFrig

item2.setAttribute('id', 'pearsItem');

item1.textContent = 'Apple';
item2.textContent = 'Pears';
item3.textContent = 'Bananas';
orengesItem.textContent = 'Oranges'; // not append in docFrig

docFrig.appendChild(item1);
docFrig.appendChild(item2);
docFrig.appendChild(item3);

// Append items to myList
myList.appendChild(docFrig);

// get dom
const pearsItem = document.getElementById('pearsItem');


//Opposite to append
function addToBeginnging(parent, toInsert) {
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert, firstChild)
}

// myList.insertBefore(orengesItem, pearsItem);
addToBeginnging(myList, orengesItem)