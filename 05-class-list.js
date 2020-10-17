// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'Class List!';
document.body.appendChild(h2);

// Add a p tag
const para = document.createElement('p');
para.setAttribute('id', 'myPara');
para.textContent = 'Yeah mate';
document.body.appendChild(para);

// Class List
para.classList.add('bold', 'big-font');
para.classList.remove('bold');
para.classList.replace('big-font', 'red-bg');

para.classList.toggle('red-bg'); // Exist class then remove
para.classList.toggle('red-bg'); // doesn't exist class then add


console.log(para.classList);
console.log(para.classList.contains('white-txt')); //fasle
console.log(para.classList.contains('red-bg')); //true
