// Parent Element
const ul = document.createElement('ul');
ul.setAttribute('id', 'myList');

// Child Element
const li = document.createElement('li');
li.textContent = 'Kiwi';
ul.appendChild(li);

document.body.appendChild(ul);

const fruitList = ['Banana', 'Orange', 'Mango', 'Lemon'];

for (const fruit of fruitList) {
    const newListItem = document.createElement('li');
    newListItem.textContent = fruit;

    ul.appendChild(newListItem)
}
