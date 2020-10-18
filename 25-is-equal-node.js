// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'isEqulNode - DOM';
document.body.appendChild(h2);

// append div tag
const myDiv1 = document.createElement('div');
myDiv1.setAttribute('id', 'myDiv');
document.body.appendChild(myDiv1);

// append div tag
const myDiv2 = document.createElement('div');
myDiv2.setAttribute('id', 'myDiv');
myDiv2.textContent = `
`; // Assign a text node (press the enter)
document.body.appendChild(myDiv2);

// inside of myDiv2 Looklike
{
    /*<div>
        // one extra enter (auto created text node)
    </div>*/
}

// Check Node is equl or not
const isEqual = myDiv1.isEqualNode(myDiv2);

// Print Ouptup
console.log(isEqual); // false

console.log(myDiv1.childNodes); // NodeList []
console.log(myDiv2.childNodes); // NodeList [text]

console.log(myDiv1.childNodes[0]); // undefined
console.log(myDiv2.childNodes[0]);
// output looklike
/*"

"*/
