// Add a h1 tag
const h1 = document.createElement('h1');
h1.setAttribute('id', 'heading');
h1.textContent = 'Element Matches';
document.body.appendChild(h1);

// Add a p tag
const myPara = document.createElement('p');
myPara.setAttribute('id', 'myPara');
myPara.setAttribute('data-name', 'long-para');
myPara.innerHTML = "<em class='green-txt'>Lorem</em> ipsum dolor sit amet consectetur, adipisicing elit. Ea, illum corrupti rem quod iure ratione eum placeat doloremque dicta, modi sit? Vel eum nemo mollitia rerum magnam recusandae nobis minus?";
document.body.appendChild(myPara);

// Using Matches
console.log( myPara.matches('p') );
console.log( myPara.matches('#myPara') );
console.log( myPara.matches('p#myPara') );
console.log( myPara.matches('[data-name]') );