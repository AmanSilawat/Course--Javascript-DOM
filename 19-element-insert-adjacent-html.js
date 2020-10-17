// Add a h1 tag
const h1 = document.createElement('h1');
h1.setAttribute('id', 'heading');
h1.textContent = 'Element insertAdjacentHTML';
document.body.appendChild(h1);

// Add a ul tag
const para = document.createElement('p');
para.setAttribute('id', 'para');
para.innerHTML = "I'll write some <em class='green-txt'>text</em>.";
document.body.appendChild(para);

/*

beforebegin - before element
afterbegin - first child
beforeend - last child
afterend - after element

*/
const myPara = document.getElementById('para');
const strong = document.createElement('strong');
strong.classList.add('red-txt');
strong.textContent = 'encode';

myPara.insertAdjacentElement('beforebegin', strong);

// Using insertAdjacentElement: click working on inside of myPara element
// Using innerHTML:             click not working on inside of myPara element