let inputBox = document.createElement('input');
inputBox.value = "Aman Silawat";

let ul = document.createElement('ul');
let li = document.createElement('li');

li.innerHTML += "Home";
ul.appendChild(li);

document.body.appendChild(inputBox);
document.body.appendChild(ul);