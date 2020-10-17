// Add a h1 tag
const h1 = document.createElement('h1');
h1.setAttribute('id', 'heading');
h1.textContent = "Append Multiple child element."
document.body.appendChild(h1);

// Add a ul tag
const myList = document.createElement('ul');
myList.setAttribute('id', 'myList');
document.body.appendChild(myList);

function createListItem(txt) {
    var li = document.createElement('li');
    li.textContent = txt;
    return li;
}

function appendChildren(parent, children) {
    children.forEach((child) => {
        parent.appendChild(child);
    });
}

let items = [
    createListItem('Sahil'),
    createListItem('Imran'),
    createListItem('Yogesh')
];

appendChildren(myList, items)