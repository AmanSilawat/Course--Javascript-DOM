// Add a h1 tag
const h1 = document.createElement('h1');
h1.setAttribute('id', 'heading');
h1.textContent = 'Element insertAdjacentHTML';
document.body.appendChild(h1);

// Add a p tag
const para = document.createElement('p');
para.setAttribute('id', 'para');
para.innerHTML = "I'll write some <em class='green-txt'>One Text</em>.";
document.body.appendChild(para);

// Add a p tag
const paraTwo = document.createElement('p');
paraTwo.setAttribute('id', 'paraTwo');
paraTwo.innerHTML = "I'll write some <em class='green-txt'>Two Text</em>.";
document.body.appendChild(paraTwo);

/*

beforebegin - before element
afterbegin - first child
beforeend - last child
afterend - after element

*/

// html append using insertAdjacentHTML
const myPara = document.getElementById('para');
myPara.insertAdjacentHTML('beforebegin', '<b class ="red">decode</b>');

// Using insertAdjacentElement: click working on inside of myPara element
// Using innerHTML:             click not working on inside of myPara element


// html Append using innerHTML
paraTwo.innerHTML += '<b class ="red">decode</b>';

// click event woking condition on Second Paragraph
paraTwo.querySelector('em').addEventListener('click', console.log)