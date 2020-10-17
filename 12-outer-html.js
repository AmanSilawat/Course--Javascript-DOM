// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'outerHTML - DOM';
document.body.appendChild(h2);

// get h2 outer html
console.log(h2.outerHTML);

// change the outerHTML
h2.outerHTML = '<div class="box"><div>';