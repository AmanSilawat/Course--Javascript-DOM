// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Event Delegation - DOM';
document.body.appendChild(h2);

// append a div
const myDiv = document.createElement('div');
myDiv.setAttribute('id', 'myDiv');
myDiv.innerHTML = '<i>Itelic text, </i>';
document.body.appendChild(myDiv);

const strong = document.createElement('strong');
const em = document.createElement('em');
const myTextNode = document.createTextNode('Simple Text ');

strong.textContent = 'Strong ';
em.textContent = 'emphasized ';

myDiv.append(strong, em, myTextNode, ', more text', ' last one text');
